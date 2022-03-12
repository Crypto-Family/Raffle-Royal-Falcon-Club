import { ConnectedWrapper, DisconnectButton, ConnectButton } from 'celeste-framework';
import Table from 'pages/history/table';
// import MainLayout from 'src/layouts/main';
import Footer from 'src/components/commons/footer';

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
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-narrow">
                            <ConnectedWrapper
                                disconnectedComponent={
                                    <ConnectButton className="button is-rounded has-background-hgold1 has-font-bioRhyme is-borderless">
                                        {/* Make icon to the left of button */}
                                        Connect & Join Raffle
                                    </ConnectButton>
                                }
                            >
                                <DisconnectButton className="button is-rounded has-background-hgold1 has-font-bioRhyme is-borderless">
                                    <span className="icon is-small">
                                        <i className="fa-solid fa-sailboat" />
                                    </span>
                                    <span>Buy NFT</span>
                                </DisconnectButton>
                            </ConnectedWrapper>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Footer />
                    </div>
                </div>
                <div className="mt-6">
                    <Table />
                </div>
            </div>
        </section>
    );
};

export default DuringRaffle;
