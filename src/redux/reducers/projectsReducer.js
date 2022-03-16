import { PROJECT_GET_REQUEST, PROJECT_GET_SUCCESS, PROJECT_GET_FAILURE } from '../constants';

const defaultRequest = {
    loading: false,
    success: false,
    error: false,
    errorData: null,
    data: null,
};

const defaultState = {
    projectsHistory: { ...defaultRequest },
    currentProject: { ...defaultRequest },
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case PROJECT_GET_REQUEST:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    loading: true,
                },
            };

        case PROJECT_GET_SUCCESS:
            return {
                ...state,
                [action.payload.requestName]: {
                    ...defaultRequest,
                    success: true,
                    data: action.payload.data,
                },
            };

        case PROJECT_GET_FAILURE:
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
