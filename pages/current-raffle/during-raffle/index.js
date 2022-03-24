/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */

import { ConnectedWrapper, useCelesteSelector } from 'celeste-framework';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import RaffleTable from 'src/components/tables/raffle-table';
import current_project_get_request_thunk from 'src/redux/actions/currentProjectAction';
import join_project_get_request_thunk from 'src/redux/actions/joinProjectAction';
import { store as ReactNotificationsStore } from 'react-notifications-component';
import { successNotification, errorNotification } from 'src/static/notifications';
import Loader from 'src/components/loader';
import getDate from 'src/components/dateFormatter';

const DuringRaffle = () => {
    const { walletReducer, web3Reducer } = useCelesteSelector((state) => state);
    const { currentProjectReducer } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            current_project_get_request_thunk({
                requestName: 'currentProject',
            })
        );
    }, [dispatch]);

    useEffect(() => {
        if (!web3Reducer.initialized || walletReducer.address === null) return;
        dispatch(
            join_project_get_request_thunk({
                requestName: 'joinProject',
                params: {
                    userAddress: walletReducer.address,
                },
            })
        );
    }, [dispatch, walletReducer.address, web3Reducer.initialized]);

    const onJoinRaffle = (e) => {
        e.preventDefault();
        dispatch(
            join_project_get_request_thunk({
                requestName: 'joinProject',
                callback: (res) => {
                    if (res.data.success === true) {
                        ReactNotificationsStore.addNotification(
                            successNotification('Raffle Joined Successfully', res.data.msg)
                        );
                    } else {
                        ReactNotificationsStore.addNotification(errorNotification('Raffle Join Failed', res.data.msg));
                    }
                },
                params: {
                    userAddress: walletReducer.address,
                },
            })
        );
    };

    return currentProjectReducer.currentProject.success ? (
        <section className="hero has-background-hblack1 has-font-bioRhyme">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-narrow">
                            <div className="content has-text-centered">
                                <h1 className="title has-text-hgold1 has-font-bioRhyme pb-5 is-size-5">
                                    {getDate(
                                        currentProjectReducer.currentProject.data &&
                                            currentProjectReducer.currentProject.data.date_of_the_raffle
                                    )}{' '}
                                    -{' '}
                                    {getDate(
                                        currentProjectReducer.currentProject.data &&
                                            currentProjectReducer.currentProject.data.deadline_of_for_participation
                                    )}
                                </h1>
                                <p className="subtitle has-text-hwhite1 has-font-bioRhyme is-size-5 pt-6">
                                    Results will come in
                                </p>
                                <h2 className="subtitle has-text-hgold1 has-font-bioRhyme is-size-5 pt-2">
                                    {getDate(
                                        currentProjectReducer.currentProject.data &&
                                            currentProjectReducer.currentProject.data.end_date_of_the_raffle
                                    )}
                                </h2>
                            </div>
                            <div className="content has-text-centered pt-6">
                                <h1 className="title has-text-hwhite1 has-font-playfairDisplay pb-5 is-size-1">
                                    {currentProjectReducer.currentProject.data &&
                                        currentProjectReducer.currentProject.data.name}
                                </h1>
                                <figure className="image has-text-centered pb-5">
                                    <img
                                        className="is-rounded"
                                        src={
                                            currentProjectReducer.currentProject.data &&
                                            currentProjectReducer.currentProject.data.image
                                        }
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-narrow has-text-centered">
                            <ConnectedWrapper disconnectedComponent={<></>}>
                                <button
                                    type="button"
                                    className="button is-rounded has-background-hgold1 has-font-bioRhyme is-borderless is-size-5"
                                    onClick={onJoinRaffle}
                                >
                                    <span className="icon">
                                        <i className="fa-solid fa-right-to-bracket" />
                                    </span>
                                    <span>Join Raffle</span>
                                </button>
                            </ConnectedWrapper>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <RaffleTable />
                </div>
            </div>
        </section>
    ) : (
        <div className="has-background-hblack1" style={{ height: '100vh', width: '100vw' }}>
            <Loader />
        </div>
    );
};

export default DuringRaffle;
