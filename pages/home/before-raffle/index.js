import Image from 'next/image';
import brandLogo from 'src/media/logos/royal-falcon.png';

const BeforeRaffle = () => {
    return (
        <section className="hero has-background-hblack1 has-font-bioRhyme">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-narrow">
                            <div className="content has-text-centered">
                                <Image src={brandLogo} alt="Royal Falcon Logo" width={300} height={256} />
                                <h1 className="title has-text-hwhite1 has-font-playfairDisplay pb-5">
                                    OOPS ! No Raffles Currently Running
                                </h1>
                                <h2 className="subtitle has-text-weight-normal has-text-hwhite1 has-font-bioRhyme">
                                    Make sure to come again later ...
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeRaffle;
