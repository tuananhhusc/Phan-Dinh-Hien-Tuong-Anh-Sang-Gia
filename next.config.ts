import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/Phan-Dinh-Hien-Tuong-Anh-Sang-Gia" : "",
};

export default nextConfig;
