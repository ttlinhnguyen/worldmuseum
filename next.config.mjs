/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
    assetPrefix: !debug ? "https://github.com/ttlinhnguyen/worldmuseum" : "",
};

export default nextConfig;
