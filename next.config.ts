import type { NextConfig } from "next";
import withPWA from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV !== "development"?"/uv2-tirage":"",
    output: 'standalone',  // <=== enables static exports
    reactStrictMode: true,      // Enable React strict mode for improved error handling
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development"     // Remove console.log in production
    }
};

module.exports = nextConfig
