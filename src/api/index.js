import axios from 'axios';

const endpoint = process.env.ENDPOINT;

const api = {
    get: {
        userPFP: ({ userAddress }) => {
            axios({
                method: 'get',
                url: `${endpoint}/pfp/?user=${userAddress}`,
            }).then(async (response) => {
                return response.data;
            });
        },
    },
};

export default api;
