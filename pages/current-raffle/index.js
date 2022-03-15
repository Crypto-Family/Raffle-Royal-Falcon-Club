import MainLayout from 'src/layouts/main';
import DuringRaffle from './during-raffle';

const currentRaffle = () => {
    return (
        <MainLayout>
            <DuringRaffle />
        </MainLayout>
    );
};

export default currentRaffle;
