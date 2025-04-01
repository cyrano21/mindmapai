/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
  experimental: {
    optimizeFonts: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
