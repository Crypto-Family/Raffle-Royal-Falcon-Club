import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from 'src/redux/reducers/userReducer';

const reducer = combineReducers({
    userReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
