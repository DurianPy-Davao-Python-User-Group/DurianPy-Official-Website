// lib/cms/client.ts
import { draftMode } from 'next/headers';

export async function cmsFetch<T>(
  path: string,
  options: {
    headers?: Record<string, string>;
    params?: Record<string, string | number | boolean>;
  } = {}
): Promise<T> {
  const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL;
  const DRAFT_TOKEN = process.env.CMS_DRAFT_SECRET_TOKEN;

  if (!CMS_URL) {
    throw new Error('CMS fetch failed: NEXT_PUBLIC_CMS_URL is not set');
  }

  const { isEnabled } = await draftMode();
  const params = { ...options.params };
  const headers: Record<string, string> = { ...options.headers };

  if (isEnabled) {
    params.draft = 'true';
    headers['Authorization'] = `Bearer ${DRAFT_TOKEN}`;
  }

  const url = `${CMS_URL}${path}`;

  try {
    const queryString = new URLSearchParams(
      params as Record<string, string>
    ).toString();
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    const res = await fetch(fullUrl, {
      ...options,
      headers,
    });

    if (!res.ok) {
      throw new Error(
        `CMS fetch failed: ${res.status} ${res.statusText} on ${path}`
      );
    }

    return res.json() as Promise<T>;
  } catch (err) {
    // if (err instanceof Error) {
    //   throw err; // preserve the specific message thrown above
    // }
    throw new Error(`CMS fetch failed: ${String(err)} ${CMS_URL}`);
  }
}
