module.exports = {
    reactStrictMode: true,
    env: {
        FONT_AWESOME_KEY: '8d70729523',
        // ENDPOINT: 'http://193.176.87.163:8080',
        ENDPOINT: 'http://localhost:8080',
    },
    images: {
        // TODO: Try to find the domain corresponding to fetch the image from the server
        domain: ['http://meebits.larvalabs.com'],
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
