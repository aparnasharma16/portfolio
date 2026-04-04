import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/images",
      },
      {
        protocol: "https",
        hostname: "assets-au-01.kc-usercontent.com",
        port: "",
        pathname:
          "/df4a25df-7d25-0294-ad5c-62528c8f82da/dafcbd7c-0500-4d33-8785-ab2497753f32/**",
      },
      {
        protocol: "https",
        hostname: "www.onstechglobal.com",
        port: "",
        pathname: "/build/assets/**",
      },
    ],
  },
};

export default nextConfig;
