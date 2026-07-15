import { createServerFn } from '@tanstack/react-start';
import { securityHeaders } from '@/middleware';

/**
 * Server function that applies security headers to every request.
 * Called from the root route's `beforeLoad` to ensure headers are set
 * on all server-rendered pages.
 */
export const applySecurityHeaders = createServerFn({ method: 'GET' })
  .middleware([securityHeaders])
  .handler(() => {
    // No-op — the middleware handles setting the headers.
  });
