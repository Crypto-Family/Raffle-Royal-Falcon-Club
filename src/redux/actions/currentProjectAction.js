import api from 'src/api';
import { CURRENT_PROJECT_GET_FAILURE, CURRENT_PROJECT_GET_SUCCESS, CURRENT_PROJECT_GET_REQUEST } from '../constants';

const current_project_get_request = (fetchData) => ({
    type: CURRENT_PROJECT_GET_REQUEST,
    payload: fetchData,
});

const current_project_get_success = (data) => ({
    type: CURRENT_PROJECT_GET_SUCCESS,
    payload: data,
});

const current_project_get_failure = (error) => ({
    type: CURRENT_PROJECT_GET_FAILURE,
    payload: error,
});

const current_project_get_request_thunk = (fetchData) => {
    return async (dispatch) => {
        dispatch(current_project_get_request(fetchData));
        const { requestName, params, callback } = fetchData;
        try {
            const response = await api.get[requestName](params);
            if (callback && typeof callback === 'function') {
                callback(response);
            }

            dispatch(current_project_get_success({ data: response.data, requestName }));
        } catch (error) {
            dispatch(current_project_get_failure({ errorData: error, requestName }));
        }
    };
};

export default current_project_get_request_thunk;
