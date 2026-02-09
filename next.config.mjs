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
            key: 'content-security-policy',
            value: `
              default-src 'self';
              script-src 'report-sample' 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'report-sample' 'self' 'unsafe-inline' https://fonts.googleapis.com;
              object-src 'none';
              base-uri 'self';
              connect-src 'self';
              font-src 'self' https://fonts.gstatic.com;
              frame-src 'self' https://docs.google.com;
              img-src 'self';
              manifest-src 'self';
              media-src 'self';
              worker-src 'none';
            `
              .replace(/\s+/g, ' ')
              .trim(),
          },
          {
            key: 'x-frame-options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'x-content-type-options',
            value: 'nosniff',
          },
          {
            key: 'referrer-policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'permissions-policy',
            value: `
              camera=(),
              microphone=(),
              geolocation=(),
              usb=(),
              payment=()
            `
              .replace(/\s+/g, ' ')
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
