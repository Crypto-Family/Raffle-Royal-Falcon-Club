import api from 'src/api';

import { NAVBAR_GET_FAILURE, NAVBAR_GET_REQUEST, NAVBAR_GET_SUCCESS } from '../constants';

const navbar_get_request = (fetchData) => ({ type: NAVBAR_GET_REQUEST, payload: fetchData });
const navbar_get_success = (data) => ({ type: NAVBAR_GET_SUCCESS, payload: data });
const navbar_get_failure = (error) => ({ type: NAVBAR_GET_FAILURE, payload: error });

const navbar_get_request_thunk = (fetchData) => {
    return async (dispatch) => {
        dispatch(navbar_get_request(fetchData));
        const { requestName, params, callback } = fetchData;
        try {
            const response = await api.get[requestName](params);
            if (callback && typeof callback === 'function') {
                callback(response);
            }

            dispatch(navbar_get_success({ data: response.data, requestName }));
        } catch (error) {
            dispatch(navbar_get_failure({ errorData: error, requestName }));
        }
    };
};
export default navbar_get_request_thunk;
