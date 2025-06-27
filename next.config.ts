import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env:{
    BASE_URL_API: process.env.BASE_URL_API,
  },
  publicRuntimeConfig:{
    BASE_URL_API: process.env.BASE_URL_API,
  }
};

export default nextConfig;
