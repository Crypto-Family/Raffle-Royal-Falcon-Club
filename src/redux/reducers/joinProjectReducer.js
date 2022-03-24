/* eslint-disable default-param-last */

import { JOIN_PROJECT_GET_REQUEST, JOIN_PROJECT_GET_SUCCESS, JOIN_PROJECT_GET_FAILURE } from '../constants';

const defaultRequest = {
    loading: false,
    success: false,
    error: false,
    errorData: null,
    data: null,
};

const defaultState = {
    joinProject: { ...defaultRequest },
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case JOIN_PROJECT_GET_REQUEST:
            return {
                ...state,
                joinProject: {
                    ...defaultRequest,
                    loading: true,
                },
            };

        case JOIN_PROJECT_GET_SUCCESS:
            return {
                ...state,
                joinProject: {
                    ...defaultRequest,
                    success: true,
                    data: action.payload.data,
                },
            };

        case JOIN_PROJECT_GET_FAILURE:
            return {
                ...state,
                joinProject: {
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
