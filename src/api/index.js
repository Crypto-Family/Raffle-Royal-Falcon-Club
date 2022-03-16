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
                url: `${endpoint}/join/?user=${userAddress}`,
            }).then((res) => {
                const newArray = [];
                const { msg, success } = res.data;
                newArray.push({
                    message: msg,
                    success,
                });
                return newArray;
            }),

        projectHistory: () =>
            axios({
                method: 'get',
                url: `${endpoint}/project/history`,
            }).then((res) => {
                const newArray = [];
                const { image, raffle_image, address, ending_time, name, starting_time } = res.data;

                address.forEach((addr, i) => {
                    newArray.push({
                        address: addr,
                        image: image[i],
                        raffle_image,
                        ending_time,
                        name,
                        starting_time,
                    });
                });
                return newArray;
            }),

        currentProject: () =>
            axios({
                method: 'get',
                url: `${endpoint}/project/current`,
            }).then((res) => {
                const newArray = [];
                const { image, name, date_of_the_raffle, deadline_of_for_participation, end_date_of_the_raffle } =
                    res.data;
                newArray.push({
                    image,
                    name,
                    raffleDate: date_of_the_raffle,
                    deadline: deadline_of_for_participation,
                    endDate: end_date_of_the_raffle,
                });
                return newArray;
            }),
    },
};

export default api;
