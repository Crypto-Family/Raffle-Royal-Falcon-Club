/* eslint-disable default-param-last */

import { USER_GET_REQUEST, USER_GET_SUCCESS, USER_GET_FAILURE } from '../constants';

const defaultRequest = {
    loading: false,
    success: false,
    error: false,
    errorData: null,
    data: null,
};

const defaultState = {
    userPFP: { ...defaultRequest },
    joinProject: { ...defaultRequest },
    participatingUsers: { ...defaultRequest },
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_GET_REQUEST:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    loading: true,
                },
            };

        case USER_GET_SUCCESS:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    success: true,
                    data: action.payload.data,
                },
            };

        case USER_GET_FAILURE:
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
