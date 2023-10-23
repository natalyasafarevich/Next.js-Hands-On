/** @type {import('next').NextConfig} */
const nextConfig = { // c сайта
  images: {
    formats: [
      'image/webp', 'image/avif'
    ],
    deviceSizes: [
      375,
      475,
      575,
      991,
      1200
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/vi/**'
      }
    ]
  }
}

module.exports = nextConfig
