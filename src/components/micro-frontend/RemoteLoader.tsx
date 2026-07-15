/**
 * ═══════════════════════════════════════════════════════
 * RemoteLoader — Strategy 1 Client-Side Runtime Bypass
 * ═══════════════════════════════════════════════════════
 *
 * Dynamically loads a Module Federation remote component
 * using Strategy 1 (Client-Side Runtime Bypass).
 *
 * Uses TanStack Router's <ClientOnly> wrapper to safely prevent
 * server-side execution and render fallback skeletons during SSR.
 */

'use client';

/**
 * ═══════════════════════════════════════════════════════
 * Common Types
 * ═══════════════════════════════════════════════════════
 *
 * Shared utility types used across MFEs and BFFs.
 */
/** Generic result type for operations that can fail. */

export type Result<T, E = Error> =
  { ok: true; data: T } | { ok: false; error: E };

/** Extract the data type from a Result. */
export type ResultData<R> = R extends { ok: true; data: infer T } ? T : never;

/** Props passed to a remote MFE component by the Host's RemoteLoader. */
export interface RemoteMfeProps {
  /** The base path where this MFE is mounted (e.g., "/service-a") */
  basePath?: string;
  /** Callback to request the Host to navigate */
  onNavigate?: (path: string) => void;
  /** Raw HTML string for hydrated MFEs */
  serverHtml?: string;
  /** Dynamic endpoint for hydrated MFEs */
  dataEndpoint?: string;
  /** Additional dynamic props passed to remotes */
  [key: string]: unknown;
}

/** Configuration for an MFE's isolated TanStack Query instance. */
export interface MfeQueryConfig {
  /** Base URL for the MFE's BFF API */
  apiBaseUrl: string;
  /** Default stale time in ms */
  staleTime?: number;
  /** Default retry count */
  retryCount?: number;
}

/**
 * ═══════════════════════════════════════════════════════
 * Discovery Manifest Types
 * ═══════════════════════════════════════════════════════
 *
 * Type definitions for the runtime service discovery
 * manifest (`discovery.json`). The Host fetches this at
 * startup from S3/CloudFront to dynamically resolve
 * MFE remote entry URLs — enabling independent deployments.
 */

/** The type of MFE determines how the Host loads it. */
export type RemoteType =
  | 'route' // Full-page MFE mounted at a route prefix (e.g., /service-a/*)
  | 'widget' // Fractional component embedded within a host page
  | 'hydrated'; // Server-rendered HTML that gets hydrated client-side

/** Configuration for a single remote MFE in the discovery manifest. */
export interface RemoteEntry {
  /** URL to the Module Federation remote entry (e.g., remoteEntry.js) */
  url: string;
  /** Module Federation scope name (matches `name` in the remote's vite.config.ts) */
  scope: string;
  /** The exposed module path (e.g., "./App", "./Widget") */
  module: string;
  /** How this MFE is loaded by the Host */
  type: RemoteType;
  /** Route prefix for route-type MFEs (e.g., "/service-a") */
  routePrefix?: string;
  /** Feature flag name — if set, the MFE is only loaded when the flag is true */
  featureFlag?: string;
  /** Optional integrity hash for the remote entry script */
  integrity?: string;
}

/** Feature flag values resolved at runtime. */
export type FeatureFlags = Record<string, boolean>;

/**
 * The full discovery manifest shape.
 * Hosted on S3/CloudFront and fetched by the Host at startup.
 */
export interface DiscoveryManifest {
  /** Semantic version of the manifest schema */
  version: string;
  /** ISO 8601 timestamp of the last manifest update */
  updatedAt: string;
  /** Map of MFE name → remote configuration */
  remotes: Record<string, RemoteEntry>;
  /** Runtime feature flags (controls conditional MFE loading) */
  featureFlags: FeatureFlags;
}

import React, { lazy, Suspense, useMemo, type ComponentType } from 'react';
import ReactDOM from 'react-dom';
import { init, registerRemotes, loadRemote } from '@module-federation/runtime';
import { ErrorBoundary } from '../ErrorBoundary';

let isMfInitialized = false;

function ensureMfInitialized(): void {
  if (isMfInitialized) return;
  try {
    init({
      name: 'tanstackHost',
      remotes: [],
      shared: {
        react: {
          version: '19.0.0',
          scope: 'default',
          lib: () => React,
          shareConfig: {
            singleton: true,
            requiredVersion: '^19.0.0',
          },
        },
        'react-dom': {
          version: '19.0.0',
          scope: 'default',
          lib: () => ReactDOM,
          shareConfig: {
            singleton: true,
            requiredVersion: '^19.0.0',
          },
        },
      },
    });
    isMfInitialized = true;
  } catch (e) {
    console.warn('[MF Runtime Init Warning]', e);
  }
}

const registeredRemotes = new Set<string>();

function ensureRemoteRegistered(remote: RemoteEntry): void {
  ensureMfInitialized();
  if (registeredRemotes.has(remote.scope)) return;
  try {
    registerRemotes([
      {
        name: remote.scope,
        alias: remote.scope,
        entry: remote.url,
        type: 'module',
      },
    ]);
    registeredRemotes.add(remote.scope);
  } catch (e) {
    console.warn(`[MF Register Remote Warning: ${remote.scope}]`, e);
  }
}

function createRemoteComponent(
  remote: RemoteEntry
): ComponentType<RemoteMfeProps> {
  return lazy(async () => {
    ensureRemoteRegistered(remote);

    const rawModule = remote.module || './App';
    const cleanModule = rawModule.startsWith('./')
      ? rawModule.slice(2)
      : rawModule;

    const candidateNames = [
      `${remote.scope}/${cleanModule}`,
      `${remote.scope}/${rawModule}`,
      remote.scope,
    ];

    let lastError: any = null;

    for (const name of candidateNames) {
      try {
        const res = await loadRemote<any>(name);
        if (res) {
          console.log({ name, res });

          const component = res.default || res;
          return { default: component };
        }
      } catch (err) {
        lastError = err;
      }
    }

    console.error(
      `Failed to load remote ${remote.scope} module ${remote.module}:`,
      lastError
    );
    throw (
      lastError ||
      new Error(`Failed to load remote module for scope ${remote.scope}`)
    );
  });
}

interface RemoteLoaderProps {
  remote: RemoteEntry;
  mfeProps?: RemoteMfeProps;
  loadingFallback?: React.ReactNode;
}

const DefaultSuspenseFallback = (
  <div className="flex items-center justify-center p-12">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
  </div>
);

export function RemoteLoader({
  remote,
  mfeProps,
  loadingFallback,
}: RemoteLoaderProps) {
  const RemoteComponent = useMemo(
    () => createRemoteComponent(remote),
    [remote.scope, remote.module, remote.url]
  );

  return (
    <ErrorBoundary name={remote.scope}>
      <Suspense fallback={loadingFallback ?? DefaultSuspenseFallback}>
        <RemoteComponent {...mfeProps} />
      </Suspense>
    </ErrorBoundary>
  );
}
