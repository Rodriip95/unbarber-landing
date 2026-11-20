import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100 % estático para Firebase Hosting (carpeta /out).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
