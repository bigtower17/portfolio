import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  transpilePackages: ['framer-motion'],
  eslint: {
    // Permetti il build anche con warning ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Permetti il build anche con errori TS minori
    ignoreBuildErrors: false,
  },
};

export default nextConfig;