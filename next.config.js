module.exports = {
    reactStrictMode: true,
    env: {
        FONT_AWESOME_KEY: '8d70729523',
        ENDPOINT: 'http://193.176.87.163:8080',
    },
    images: {
        domain: ['https://meebits.larvalabs.com/'],
    },
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
