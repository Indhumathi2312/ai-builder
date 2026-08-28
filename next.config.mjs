/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.hostinger.com",
      },
      {
        protocol: "https",
        hostname: "customer-l1i0l3fn06n7hp6n.cloudflarestream.com",
      },
      {
        protocol: "https",
        hostname: "challenges.cloudflare.com",
      },
      {
        protocol: "https",
        hostname: "cdnjs.cloudflare.com",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
