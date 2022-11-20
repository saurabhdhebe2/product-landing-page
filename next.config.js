/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static01.nyt.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
