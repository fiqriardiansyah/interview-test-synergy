/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["source.unsplash.com", "cdn.fakercloud.com"],
    },
};

module.exports = nextConfig;
