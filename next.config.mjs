/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'strict-transport-security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
              style-src 'self' 'unsafe-inline' https:;
              img-src 'self' data: https: blob:;
              font-src 'self' data: https:;
              connect-src 'self' https:;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'self';
            `.replace(/\s+/g, ' ').trim(),
          },
          {
            key: 'x-frame-options',
            value: 'SAMEORIGIN',
          },
          {
            key: "x-content-type-options",
            value: "nosniff",
          },
          {
            key: "referrer-policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: `
              camera=(),
              microphone=(),
              geolocation=(),
              interest-cohort=(),
              usb=(),
              payment=()
            `.replace(/\s+/g, " ").trim(),
          },                          
        ],
      },
    ];
  },
};

export default nextConfig;
