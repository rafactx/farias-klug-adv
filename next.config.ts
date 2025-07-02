// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.css': ['css-loader', 'postcss-loader'],
      },
    },
  },
};

export default nextConfig;
