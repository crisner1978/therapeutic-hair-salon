// const securityHeaders = [
//     {
//         key: 'X-DNS-Prefetch-Control',
//         value: 'on'
//     },
//     {
//         key: 'X-XSS-Protection',
//         value: '1; mode=block'
//     },
//     {
//         key: 'X-Frame-Options',
//         value: 'SAMEORIGIN'
//     },
//     {
//         key: 'Permissions-Policy',
//         value: 'camera=(), microphone=()'
//     },
//     {
//         key: 'X-Content-Type-Options',
//         value: 'nosniff'
//     },
//     {
//         key: 'Referrer-Policy',
//         value: 'strict-origin-when-cross-origin'
//     },
//     {
//         key: 'Content-Security-Policy',
//         value: "default-src 'self';img-src 'self' data: ;object-src 'self'; style-src 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';script-src-elem 'self' 'unsafe-inline' 'unsafe-eval';script-src-attr 'self' 'unsafe-inline';frame-src https://www.google.com/maps/embed"
//     }

// ]

module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};
// async headers() {
//     return [
//         {
//             source: "/(.*)",
//             headers: securityHeaders,
//         },
//     ]
// },
