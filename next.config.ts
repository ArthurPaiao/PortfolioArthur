import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir o dev server pelo IP da rede local (ex.: testar no celular)
  allowedDevOrigins: ["192.168.0.74"],
};

export default nextConfig;
