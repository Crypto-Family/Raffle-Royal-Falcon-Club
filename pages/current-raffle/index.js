/* eslint-disable no-nested-ternary */

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'src/components/loader';
import current_project_get_request_thunk from 'src/redux/actions/currentProjectAction';

import DuringRaffle from './during-raffle';
import NoRaffle from './no-raffle';

const CurrentRaffle = () => {
    const { currentProjectReducer } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            current_project_get_request_thunk({
                requestName: 'currentProject',
            })
        );
    }, [dispatch]);

    const today = new Date();
    const todayEpoch = today.getTime() / 1000;

    return <DuringRaffle />;
};

export default CurrentRaffle;
