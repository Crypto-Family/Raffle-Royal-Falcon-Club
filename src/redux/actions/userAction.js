import api from 'src/api';

import { USER_GET_FAILURE, USER_GET_REQUEST, USER_GET_SUCCESS } from '../constants';

const user_get_request = (fetchData) => ({ type: USER_GET_REQUEST, payload: fetchData });
const user_get_success = (data) => ({ type: USER_GET_SUCCESS, payload: data });
const user_get_failure = (error) => ({ type: USER_GET_FAILURE, payload: error });

const user_get_request_thunk = (fetchData) => {
    return async (dispatch) => {
        dispatch(user_get_request(fetchData));
        const { requestName, params } = fetchData;
        try {
            const response = await api.get[requestName](params);

            dispatch(user_get_success({ data: response.data, requestName }));
        } catch (error) {
            dispatch(user_get_failure({ errorData: error, requestName }));
        }
    };
};
export default user_get_request_thunk;
