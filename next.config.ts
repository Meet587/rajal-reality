
import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Keep the path to the existing i18n config file unless moved.
// The warning suggests moving to ./i18n/request.ts, but the current setup works.
// If you decide to move the file later, update this path.
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
