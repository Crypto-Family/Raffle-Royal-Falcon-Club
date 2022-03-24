import api from 'src/api';

import {
    ACTIVE_PARTICIPANTS_GET_FAILURE,
    ACTIVE_PARTICIPANTS_GET_REQUEST,
    ACTIVE_PARTICIPANTS_GET_SUCCESS,
} from '../constants';

const active_participants_get_request = (fetchData) => ({ type: ACTIVE_PARTICIPANTS_GET_REQUEST, payload: fetchData });

const active_participants_get_success = (data) => ({ type: ACTIVE_PARTICIPANTS_GET_SUCCESS, payload: data });

const active_participants_get_failure = (error) => ({ type: ACTIVE_PARTICIPANTS_GET_FAILURE, payload: error });

const active_participants_get_request_thunk = (fetchData) => {
    return async (dispatch) => {
        dispatch(active_participants_get_request(fetchData));
        const { requestName, params, callback } = fetchData;
        try {
            const response = await api.get[requestName](params);
            if (callback && typeof callback === 'function') {
                callback(response);
            }

            dispatch(active_participants_get_success({ data: response.data, requestName }));
        } catch (error) {
            dispatch(active_participants_get_failure({ errorData: error, requestName }));
        }
    };
};
export default active_participants_get_request_thunk;
