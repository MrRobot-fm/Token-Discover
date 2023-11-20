/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  swcMinify: true,
  images: { remotePatterns: [{protocol:"https",  hostname:"lh3.googleusercontent.com"},{protocol:"https",hostname:"i.seadn.io"},{protocol:'https',hostname:'storage.googleapis.com'},{
    protocol: 'https',hostname:'cdn.simplehash.com'
  }] }
}

module.exports = nextConfig
