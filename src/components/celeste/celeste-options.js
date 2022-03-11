// import surrealABI from 'src/blockchain/abis/surreal.json';

const celesteOptions = {
    rpcs: [
        {
            chainId: 3,
            url: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        },
    ],
    // smartContracts: [
    //     {
    //         key: 'SURREAL',
    //         abi: surrealABI,
    //         address: '0x4324bd85B40c225498cB01Bf7d7f5ab039A1744C',
    //         isMultichain: false,
    //     },
    // ],
    addressBook: {
        // SURREAL: '0x4324bd85B40c225498cB01Bf7d7f5ab039A1744C',
    },
};

export default celesteOptions;
