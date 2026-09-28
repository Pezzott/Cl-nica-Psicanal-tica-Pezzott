import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/conteudos",
        destination: "/artigos",
        permanent: true,
      },
      {
        source: "/conteudos/:slug",
        destination: "/artigos/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
