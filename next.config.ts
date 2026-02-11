import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aaron-cv",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
