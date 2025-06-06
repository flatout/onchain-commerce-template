/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.io', 'gateway.ipfs.io', 'manifold.xyz', 'arweave.net'],
  },
}

export default nextConfig;
