import axios from 'axios';

const endpoint = process.env.ENDPOINT;

const api = {
    get: {
        userPFP: ({ userAddress }) =>
            axios({
                method: 'get',
                url: `${endpoint}/pfp/?user=${userAddress}`,
            }),

        participatingUsers: () =>
            axios({
                method: 'get',
                url: `${endpoint}/project/active/participants`,
            }).then((res) => {
                const newArray = [];
                const { address, image } = res.data;
                address.forEach((addr, i) => {
                    newArray.push({
                        address: addr,
                        image: image[i],
                    });
                });
                return newArray;
            }),

        joinProject: ({ userAddress }) =>
            axios({
                method: 'get',
                url: `${endpoint}/`,
            }),
    },
};

export default api;
