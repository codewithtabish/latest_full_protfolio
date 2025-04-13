/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'avatar.iran.liara.run',
            pathname: '/**',
        }, ],
    },
};

export default nextConfig;