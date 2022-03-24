import api from 'src/api';
import { JOIN_PROJECT_GET_FAILURE, JOIN_PROJECT_GET_SUCCESS, JOIN_PROJECT_GET_REQUEST } from '../constants';

const join_project_get_request = (fetchData) => ({
    type: JOIN_PROJECT_GET_REQUEST,
    payload: fetchData,
});

const join_project_get_success = (data) => ({
    type: JOIN_PROJECT_GET_SUCCESS,
    payload: data,
});

const join_project_get_failure = (error) => ({
    type: JOIN_PROJECT_GET_FAILURE,
    payload: error,
});

const join_project_get_request_thunk = (fetchData) => {
    return async (dispatch) => {
        dispatch(join_project_get_request(fetchData));
        const { requestName, params, callback } = fetchData;
        try {
            const response = await api.get[requestName](params);
            if (callback && typeof callback === 'function') {
                callback(response);
            }

            dispatch(join_project_get_success({ data: response.data, requestName }));
        } catch (error) {
            dispatch(join_project_get_failure({ errorData: error, requestName }));
        }
    };
};

export default join_project_get_request_thunk;
