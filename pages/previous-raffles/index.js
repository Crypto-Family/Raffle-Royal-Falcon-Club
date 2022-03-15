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
                                        <div className="control is-expanded has-icons-left">
                                            <span className="select is-fullwidth">
                                                <select className="has-font-bioRhyme">
                                                    <option disabled>Select Raffle</option>
                                                    <option>Raffle 1</option>
                                                    <option>Raffle 2</option>
                                                    <option>Raffle 3</option>
                                                </select>
                                            </span>
                                            <span className="icon is-small is-left">
                                                <i className="fa-solid fa-rectangle-history-circle-user has-text-hblack1" />
                                            </span>
                                        </div>
                                        <div className="control">
                                            <button
                                                type="submit"
                                                className="button is-primary has-background-hgold1 has-text-hblack1 has-font-bioRhyme"
                                            >
                                                Choose
                                            </button>
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
