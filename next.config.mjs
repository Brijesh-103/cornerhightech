/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["images.pexels.com", "images.unsplash.com", "via.placeholder.com", "picsum.photos"],
    unoptimized: true,
  },
};

export default nextConfig;
