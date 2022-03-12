import React from 'react';
import MainLayout from 'src/layouts/main';
import DuringRaffle from './during-raffle';
// import NoRaffle from './no-raffle';

const Home = () => {
    return (
        <MainLayout>
            <DuringRaffle />
        </MainLayout>
    );
};

export default Home;
