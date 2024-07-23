/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // next.config.js

  images: {
    domains: ['images.pexels.com', 'static.wixstatic.com'],
  },


  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: "images.pexels.com",
       
  //     },
      
  //   ],
  // },
  //   reactStrictMode: true,
  // images: {
  //   domains: [ "abc.def.org", ]
  // },
};

export default nextConfig;
