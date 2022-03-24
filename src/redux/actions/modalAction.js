import { OPEN_MODAL, CLOSE_MODAL, SET_ANIMATION } from '../constants';

export const open_modal = ({ modalName, modalData }) => ({ type: OPEN_MODAL, payload: { modalName, data: modalData } });
export const start_close_modal = () => ({ type: SET_ANIMATION });
export const close_modal = ({ modalName }) => ({ type: CLOSE_MODAL, payload: { modalName } });
