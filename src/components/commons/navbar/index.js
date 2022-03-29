/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { ConnectedWrapper, ConnectButton, DisconnectButton, useCelesteSelector } from 'celeste-framework';
import Image from 'next/image';
import Link from 'next/link';
import mainLogo from 'src/media/logos/royal-falcon.png';
import placeholder from 'src/media/placeholder/placeholder.png';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import user_get_request_thunk from 'src/redux/actions/navbarAction';

const getAddressReduced = (address) => `${address.slice(0, 5)}...${address.slice(-5)}`;

const Navbar = () => {
    // celeste redux
    const { walletReducer, web3Reducer } = useCelesteSelector((state) => state);
    const { navbarReducer } = useSelector((state) => state);

    const dispatch = useDispatch();

    // local state
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const onBurgerClicked = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        dispatch(
            user_get_request_thunk({
                requestName: 'userPFP',
                params: {
                    userAddress: walletReducer.address,
                },
            })
        );
    }, [dispatch, walletReducer.address, walletReducer.isConnected, walletReducer.isLoggedIn, web3Reducer.initialized]);
    return (
        <section className="hero has-background-hblack1 ">
            <div className="hero-head">
                <div className="navbar columns is-mobile is-marginless">
                    <div className="column left ">
                        <Link href="/" passHref>
                            <a>
                                <Image src={mainLogo} alt="Royal Falcon Logo" width={55} height={55} />
                            </a>
                        </Link>
                        <p className="navbar-item has-font-goblinOne has-text-hwhite1 is-size-6 desktop">
                            Raffle Royal Falcon Club
                        </p>
                    </div>

                    <div className={`navbar-menu ${isOpen ? 'is-active' : ''} column center desktop`}>
                        <div className="has-font-cormorant">
                            <div className="navbar-item">
                                <Link href="/current-raffle" passHref>
                                    <a className={router.pathname === '/current-raffle' ? 'active' : ''}>
                                        Current Raffle
                                    </a>
                                </Link>
                                <Link href="/previous-raffles" passHref>
                                    <a className={router.pathname === '/previous-raffles' ? 'active' : ''}>
                                        Previous Raffles
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <ConnectedWrapper
                            disconnectedComponent={
                                <div className="navbar-item">
                                    <ConnectButton className="navbar-button button is-rounded has-background-hgold1 has-font-bioRhyme is-borderless">
                                        <span className="icon is-small">
                                            <i className="fas fa-plug" />
                                        </span>
                                        <span>Connect</span>
                                    </ConnectButton>
                                </div>
                            }
                        >
                            <div className="navbar-item has-font-bioRhyme has-text-hwhite1 right">
                                <div className="columns right">
                                    <div className="is-flex is-flex-direction-column is-justify-content-center pt-1">
                                        <figure className="image is-32x32 reduced-image-size-mobile">
                                            {navbarReducer.userPFP.success ? (
                                                <img
                                                    className="is-rounded "
                                                    src={navbarReducer.userPFP.data.image}
                                                    alt="NFT Profile"
                                                />
                                            ) : (
                                                <Image
                                                    src={placeholder}
                                                    alt=""
                                                    className="is-rounded"
                                                    width={32}
                                                    height={32}
                                                />
                                            )}
                                        </figure>
                                    </div>
                                    <div className="column is-size-6 reduced-size-for-mobile">
                                        Connected as
                                        <br />
                                        <p className="has-text-hgold1">
                                            {walletReducer.address && getAddressReduced(walletReducer.address)}
                                        </p>
                                    </div>

                                    <div className="navbar-item">
                                        <DisconnectButton className="navbar-button button is-rounded has-background-hgold1 has-font-bioRhyme is-borderless">
                                            <span className="icon">
                                                <i className="fas fa-sign-out-alt" />
                                            </span>
                                            <span>Logout</span>
                                        </DisconnectButton>
                                    </div>
                                </div>
                            </div>
                        </ConnectedWrapper>
                        <a
                            id="burger"
                            role="button"
                            className={`navbar-burger ${isOpen ? 'is-active' : ''} has-background-hblack1 right `}
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbar"
                            onClick={onBurgerClicked}
                            tabIndex={-1}
                        >
                            <span className="has-text-hwhite1" aria-hidden="true" />
                            <span className="has-text-hwhite1" aria-hidden="true" />
                            <span className="has-text-hwhite1" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
