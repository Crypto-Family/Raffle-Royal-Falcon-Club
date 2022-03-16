import api from 'src/api';
import { PROJECT_GET_REQUEST, PROJECT_GET_SUCCESS, PROJECT_GET_FAILURE } from '../constants';

export const project_get_request = (fetchData) => ({ type: PROJECT_GET_REQUEST, payload: fetchData });
export const project_get_success = (data) => ({ type: PROJECT_GET_SUCCESS, payload: data });
export const project_get_failure = (error) => ({ type: PROJECT_GET_FAILURE, payload: error });

const project_get_request_thunk = (fetchData) => {
    return async (dispatch) => {
        dispatch(project_get_request(fetchData));
        const { requestName, params } = fetchData;
        try {
            const response = await api.get[requestName](params);

            dispatch(project_get_success({ data: response.data, requestName }));
        } catch (error) {
            dispatch(project_get_failure({ errorData: error, requestName }));
        }
    };
};

export default project_get_request_thunk;
