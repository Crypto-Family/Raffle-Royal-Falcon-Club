module.exports = {
    reactStrictMode: true,
    env: {},
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ];
    },
};
