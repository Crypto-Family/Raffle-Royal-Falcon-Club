/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { ConnectedWrapper, ConnectButton, DisconnectButton, useCelesteSelector } from 'celeste-framework';
import Image from 'next/image';
import Link from 'next/link';
// import { useDispatch, useStore } from 'react-redux';
import mainLogo from 'src/media/logos/royal-falcon.png';

const getAddressReduced = (address) => `${address.slice(0, 5)}...${address.slice(-5)}`;

const Navbar = () => {
    // celeste redux
    const { walletReducer } = useCelesteSelector((state) => state);

    // local state
    const [isOpen, setIsOpen] = useState(false);

    const onBurgerClicked = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <section className="hero has-background-hblack1 ">
            <div className="hero-head container is-fluid">
                <div className="navbar columns is-mobile is-marginless">
                    <div className="column left">
                        <Link href="/">
                            <a>
                                <Image src={mainLogo} alt="Royal Falcon Logo" width={55} height={55} />
                            </a>
                        </Link>
                        <p className="navbar-item has-font-goblinOne has-text-hwhite1 is-size-6">
                            Royal Raffle Falcon Club
                        </p>
                        <a
                            id="burger"
                            role="button"
                            className={`navbar-burger ${isOpen ? 'is-active' : ''} has-background-hblack1 `}
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbar"
                            onClick={onBurgerClicked}
                            tabIndex={-1}
                        >
                            <span className="has-text-hgold1" aria-hidden="true" />
                            <span className="has-text-hgold1" aria-hidden="true" />
                            <span className="has-text-hgold1" aria-hidden="true" />
                        </a>
                    </div>

                    <div className={`navbar-menu ${isOpen ? 'is-active' : ''} column center desktop`}>
                        <div className="has-font-cormorant  ">
                            <div className="navbar-item">
                                <Link href="/">Home</Link>
                                <Link href="/history">History</Link>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <ConnectedWrapper
                            disconnectedComponent={
                                <div className="navbar-item">
                                    <ConnectButton className="button is-rounded has-background-hgold1 has-font-bioRhyme is-borderless">
                                        Connect
                                    </ConnectButton>
                                </div>
                            }
                        >
                            <div className="navbar-item has-font-bioRhyme has-text-hwhite1 ">
                                <div className="columns">
                                    <div className="column is-size-6">
                                        Connected as
                                        <br />
                                        <p className="has-text-hgold1">
                                            {walletReducer.address && getAddressReduced(walletReducer.address)}
                                        </p>
                                    </div>

                                    <div className="navbar-item">
                                        <DisconnectButton className="button is-rounded has-background-hgold1 has-font-bioRhyme is-borderless">
                                            Logout
                                        </DisconnectButton>
                                    </div>
                                </div>
                            </div>
                        </ConnectedWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
