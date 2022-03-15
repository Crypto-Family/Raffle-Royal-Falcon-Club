import { ConnectedWrapper, ConnectButton } from 'celeste-framework';
import RaffleTable from 'src/components/tables/raffle-table';
import Image from 'next/image';
import nft from 'src/media/logos/YoussefNFT.png';
// import MainLayout from 'src/layouts/main';

const DuringRaffle = () => {
    return (
        <section className="hero has-background-hblack1 has-font-bioRhyme">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-narrow">
                            <div className="content has-text-centered">
                                <h1 className="title has-text-hgold1 has-font-bioRhyme pb-5 is-size-5">
                                    March 8, 2022 @ 12:00 PM - March 9, 2022 @ 12:00 PM
                                </h1>
                                <h2 className="subtitle has-text-weight-normal has-text-hgold1 has-font-bioRhyme is-size-5">
                                    Registration ends in a day
                                </h2>
                            </div>
                            <div className="content has-text-centered pt-5">
                                <h1 className="title has-text-hwhite1 has-font-playfairDisplay pb-5 is-size-1">
                                    Ferary Win
                                </h1>
                                <figure className="image has-text-centered">
                                    <Image className="is-rounded" src={nft} alt="Ferary NFT" width={256} height={256} />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-narrow has-text-centered">
                            <ConnectedWrapper
                                disconnectedComponent={
                                    <ConnectButton className="button is-rounded has-background-hgold1 has-font-bioRhyme is-borderless">
                                        {/* Make icon to the left of button */}
                                        Connect & Join Raffle
                                    </ConnectButton>
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <RaffleTable />
                </div>
            </div>
        </section>
    );
};

export default DuringRaffle;
