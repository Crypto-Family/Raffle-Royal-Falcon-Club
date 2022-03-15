import MainLayout from 'src/layouts/main';
import HistoryTable from 'src/components/tables/history-table';

const History = () => {
    return (
        <MainLayout>
            <section className="hero has-background-hblack1 has-font-bioRhyme">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-narrow">
                                <div className="content has-text-centered">
                                    <h1
                                        className="title has-text-hwhite1 has-font-playfairDisplay pb-5"
                                        style={{ letterSpacing: '5px' }}
                                    >
                                        Previous Raffles
                                    </h1>
                                    <div className="field has-addons has-font-bioRhyme is-justify-content-center pb-6">
                                        <div className="control">
                                            <div className="select is-fullwidth">
                                                <select>
                                                    <option disabled>Select Raffle</option>
                                                    <option>Raffle 1</option>
                                                    <option>Raffle 2</option>
                                                    <option>Raffle 3</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <HistoryTable />
                </div>
            </section>
        </MainLayout>
    );
};

export default History;
