/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    i18n: {
  locales: ['en', 'ru'],
  defaultLocale: 'en',
}
};

module.exports = nextConfig;
