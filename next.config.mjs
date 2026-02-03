/** @type {import('next').NextConfig} */
const nextConfig = {
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
            key: 'x-frame-options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
