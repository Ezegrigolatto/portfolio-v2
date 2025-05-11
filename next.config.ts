import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['pbs.twimg.com', 'img.freepik.com'],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
