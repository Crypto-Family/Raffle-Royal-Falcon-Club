import api from 'src/api';
import { PROJECTS_HISTORY_GET_REQUEST, PROJECTS_HISTORY_GET_SUCCESS, PROJECTS_HISTORY_GET_FAILURE } from '../constants';

export const projects_history_get_request = (fetchData) => ({ type: PROJECTS_HISTORY_GET_REQUEST, payload: fetchData });
export const projects_history_get_success = (data) => ({ type: PROJECTS_HISTORY_GET_SUCCESS, payload: data });
export const projects_history_get_failure = (error) => ({ type: PROJECTS_HISTORY_GET_FAILURE, payload: error });

const projects_history_get_request_thunk = (fetchData) => {
    return async (dispatch) => {
        dispatch(projects_history_get_request(fetchData));
        const { requestName, params, callback } = fetchData;
        try {
            const response = await api.get[requestName](params);
            if (callback && typeof callback === 'function') {
                callback(response);
            }
            dispatch(projects_history_get_success({ data: response.data, requestName }));
        } catch (error) {
            dispatch(projects_history_get_failure({ errorData: error, requestName }));
        }
    };
};

export default projects_history_get_request_thunk;
