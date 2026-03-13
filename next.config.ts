import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/ci-cd-workshop",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
