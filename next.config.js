/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // allow Cloudinary images
  },
};

module.exports = nextConfig;
    