import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { store as ReactNotificationsStore } from 'react-notifications-component';
import { open_modal } from 'src/redux/actions/modalAction';

const Test = (props) => {
    const { currentProjectReducer } = useSelector((state) => state);

    const dispatch = useDispatch();

    return <button onClick={() => dispatch(open_modal({ modalName: 'showWinnerModal' }))}> Open Modal </button>;
};

export default Test;
