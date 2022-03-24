import { OPEN_MODAL, CLOSE_MODAL, SET_ANIMATION } from '../constants';

const defaultModalStructure = {
    isOpen: false,
    data: null,
};

const defaultState = {
    showWinnerModal: { ...defaultModalStructure },
    currentModal: '',
    animation: '',
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                [action.payload.modalName]: { isOpen: true, data: action.payload.data },
                currentModal: action.payload.modalName,
                animation: 'open',
            };

        case SET_ANIMATION:
            return {
                ...state,
                animation: 'close',
            };

        case CLOSE_MODAL:
            return {
                ...state,
                [action.payload.modalName]: { ...defaultModalStructure },
                // currentModal: '',
            };

        default:
            return { ...state };
    }
};

export default reducer;
