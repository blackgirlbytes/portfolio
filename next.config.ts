import type { NextConfig } from "next";

// GitHub Pages serves a static export from /<repo>; the deploy workflow sets the base path.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
};

export default nextConfig;
