import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite abrir o dev server pelo IP da rede local (ex.: testar no celular)
  allowedDevOrigins: ["192.168.0.74"],
  experimental: {
    // Há um root layout por idioma, então o 404 é uma página própria (src/app/global-not-found.tsx)
    globalNotFound: true,
  },
};

export default nextConfig;
