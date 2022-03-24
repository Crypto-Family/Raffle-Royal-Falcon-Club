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
                const { image, address } = res.data;

                address.forEach((addr, i) => {
                    newArray.push({
                        image: image[i],
                        address: addr,
                    });
                });
                return { ...res, data: newArray };
            }),

        joinProject: ({ userAddress }) =>
            axios({
                method: 'get',
                url: `${endpoint}/join/?user=${userAddress}`,
            }),

        projectsHistory: () =>
            axios({
                method: 'get',
                url: `${endpoint}/project/history`,
            }).then((res) => {
                let newData = [];

                newData = res.data.map((item) => ({
                    ...item,
                    projects: item.address.map((addr, j) => ({
                        address: addr,
                        image: item.image[j],
                    })),
                }));
                return { ...res, data: newData };
            }),

        currentProject: () =>
            axios({
                method: 'get',
                url: `${endpoint}/project/current`,
            }),
    },
};

export default api;
