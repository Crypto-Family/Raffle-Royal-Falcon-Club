/* eslint-disable default-param-last */

import { NAVBAR_GET_FAILURE, NAVBAR_GET_REQUEST, NAVBAR_GET_SUCCESS } from '../constants';

const defaultRequest = {
    loading: false,
    success: false,
    error: false,
    errorData: null,
    data: null,
};

const defaultState = {
    userPFP: { ...defaultRequest },
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case NAVBAR_GET_REQUEST:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    loading: true,
                },
            };

        case NAVBAR_GET_SUCCESS:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    success: true,
                    data: action.payload.data,
                },
            };

        case NAVBAR_GET_FAILURE:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    error: true,
                    errorData: action.payload.errorData,
                },
            };

        default:
            return state;
    }
};

export default reducer;
