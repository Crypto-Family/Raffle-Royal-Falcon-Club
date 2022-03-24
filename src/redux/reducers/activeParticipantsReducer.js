/* eslint-disable default-param-last */
import {
    ACTIVE_PARTICIPANTS_GET_FAILURE,
    ACTIVE_PARTICIPANTS_GET_REQUEST,
    ACTIVE_PARTICIPANTS_GET_SUCCESS,
} from '../constants';

const defaultRequest = {
    loading: false,
    success: false,
    error: false,
    errorData: null,
    data: null,
};

const defaultState = {
    participatingUsers: { ...defaultRequest },
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIVE_PARTICIPANTS_GET_REQUEST:
            return {
                ...state,
                participatingUsers: {
                    ...defaultRequest,
                    loading: true,
                },
            };

        case ACTIVE_PARTICIPANTS_GET_SUCCESS:
            return {
                ...state,
                participatingUsers: {
                    ...defaultRequest,
                    success: true,
                    data: action.payload.data,
                },
            };

        case ACTIVE_PARTICIPANTS_GET_FAILURE:
            return {
                ...state,
                participatingUsers: {
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
