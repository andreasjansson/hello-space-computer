/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  reactStrictMode: true,

  env: {
    REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
  },
}
