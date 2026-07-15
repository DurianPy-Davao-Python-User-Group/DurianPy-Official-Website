import { createMiddleware } from '@tanstack/react-start';
import { setResponseHeader } from '@tanstack/react-start/server';

/**
 * Security headers middleware — mirrors the original Next.js config headers.
 * Applied to every server-rendered response for defense-in-depth.
 *
 * For production, these should also be configured at the CDN/edge layer
 * (e.g., CloudFront response headers policy) for static assets.
 */
export const securityHeaders = createMiddleware().server(({ next }) => {
  setResponseHeader(
    'strict-transport-security',
    'max-age=31536000; includeSubDomains; preload'
  );

  setResponseHeader(
    'content-security-policy',
    [
      "default-src 'self'",
      "script-src 'report-sample' 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'report-sample' 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "object-src 'none'",
      "base-uri 'self'",
      "connect-src 'self'",
      "font-src 'self' https://fonts.gstatic.com",
      "frame-src 'self' https://docs.google.com",
      "img-src 'self'",
      "manifest-src 'self'",
      "media-src 'self'",
      "worker-src 'none'",
    ].join('; ')
  );

  setResponseHeader('x-frame-options', 'SAMEORIGIN');
  setResponseHeader('x-content-type-options', 'nosniff');
  setResponseHeader('referrer-policy', 'strict-origin-when-cross-origin');
  setResponseHeader(
    'permissions-policy',
    'camera=(), microphone=(), geolocation=(), usb=(), payment=()'
  );

  return next();
});
