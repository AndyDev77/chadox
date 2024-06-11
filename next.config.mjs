/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
  env: {
    adminEmail: process.env.ADMIN_EMAIL,
  },
};

export default nextConfig;
