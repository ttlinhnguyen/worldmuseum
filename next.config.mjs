/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ttlinhnguyen.github.io",
                port: "",
                pathname: "/worldmuseum/**",
            },
        ],
    },
};

export default nextConfig;
