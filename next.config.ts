import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permite que você use quality={65}, quality={85}, etc., sem erros
    qualities: [25, 50, 65, 75, 85, 100],

    // Formatos modernos de imagem para carregar o site instantaneamente
    formats: ["image/avif", "image/webp"],

    // Se você for usar imagens externas (ex: Hotmart, PerfectPay), adicione os domínios aqui:
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.hotmart.com",
      },
      {
        protocol: "https",
        hostname: "**.googlesyndication.com", // Necessário para o AdSense
      },
    ],
  },
  // Otimização para o Framer Motion e componentes pesados
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Limpa o console no deploy final
  },
};

export default nextConfig;
