/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  swcMinify: true,
  images: { 
  remotePatterns: [
  {protocol:"https",  hostname:"lh3.googleusercontent.com"},
  {protocol:"https",hostname:"i.seadn.io"},
  {protocol:'https',hostname:'storage.googleapis.com'},
  {protocol: 'https',hostname:'cdn.simplehash.com'},
  {protocol: 'https',hostname:'raw.seadn.io'},
  {protocol: 'https',hostname:'static.nftgo.io'},
  {protocol: 'https',hostname:'metadata.ens.domains'},
  {protocol: 'https',hostname:'openseauserdata.com'}
] 
}
}

module.exports = nextConfig
