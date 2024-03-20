/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'linktome-assets.s3.ap-southeast-1.amazonaws.com',
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig
