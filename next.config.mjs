/** @type {import('next').NextConfig} */
const nextConfig = {
  // Preserve existing image configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reju.pro",
      },
      {
        protocol: "https",
        hostname: "api.reju.pro",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // Add development debugging options
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.devtool = "source-map";
    }
    return config;
  },
  // Enable detailed logging in development
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
  // Add more descriptive error overlays
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
