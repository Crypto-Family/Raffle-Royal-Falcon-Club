import MainLayout from 'src/layouts/main';
import Table from 'pages/history/table';

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
                                </div>
                            </div>
                        </div>
                    </div>
                    <Table />
                </div>
            </section>
        </MainLayout>
    );
};

export default History;
