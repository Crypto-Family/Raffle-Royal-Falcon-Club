/* eslint-disable default-param-last */
import { CURRENT_PROJECT_GET_FAILURE, CURRENT_PROJECT_GET_SUCCESS, CURRENT_PROJECT_GET_REQUEST } from '../constants';

const defaultRequest = {
    loading: false,
    success: false,
    error: false,
    errorData: null,
    data: null,
};

const defaultState = {
    currentProject: { ...defaultRequest },
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case CURRENT_PROJECT_GET_REQUEST:
            return {
                ...state,
                currentProject: {
                    ...defaultRequest,
                    loading: true,
                },
            };

        case CURRENT_PROJECT_GET_SUCCESS:
            return {
                ...state,
                currentProject: {
                    ...defaultRequest,
                    success: true,
                    data: action.payload.data,
                },
            };

        case CURRENT_PROJECT_GET_FAILURE:
            return {
                ...state,
                currentProject: {
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
