import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import navbarReducer from 'src/redux/reducers/navbarReducer';
import projectsHistoryReducer from 'src/redux/reducers/projectsHistoryReducer';
import activeParticipantsReducer from 'src/redux/reducers/activeParticipantsReducer';
import currentProjectReducer from 'src/redux/reducers/currentProjectReducer';
import joinProjectReducer from 'src/redux/reducers/joinProjectReducer';
import modalReducer from 'src/redux/reducers/modalReducer';

const reducer = combineReducers({
    navbarReducer,
    projectsHistoryReducer,
    activeParticipantsReducer,
    currentProjectReducer,
    joinProjectReducer,
    modalReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
