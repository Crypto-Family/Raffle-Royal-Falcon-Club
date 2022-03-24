import HistoryTable from 'src/components/tables/history-table';

const History = () => {
    return (
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
                            </div>
                        </div>
                    </div>
                </div>
                <HistoryTable />
            </div>
        </section>
    );
};

export default History;
