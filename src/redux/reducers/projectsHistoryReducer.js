import { PROJECTS_HISTORY_GET_REQUEST, PROJECTS_HISTORY_GET_SUCCESS, PROJECTS_HISTORY_GET_FAILURE } from '../constants';

const defaultRequest = {
    loading: false,
    success: false,
    error: false,
    errorData: null,
    data: null,
};

const defaultState = {
    projectsHistory: { ...defaultRequest },
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case PROJECTS_HISTORY_GET_REQUEST:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    loading: true,
                },
            };

        case PROJECTS_HISTORY_GET_SUCCESS:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    success: true,
                    data: action.payload.data,
                },
            };

        case PROJECTS_HISTORY_GET_FAILURE:
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
