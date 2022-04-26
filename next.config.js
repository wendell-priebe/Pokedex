/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'hostname'],
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts', 'components/Pokemon/index.tsx', 'components.Home.index.tsx', 'style.tsx'],
}

module.exports = nextConfig
