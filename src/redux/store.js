import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import uri_reducer from './reducers';

const rootReducer = combineReducers({
    uri_reducer
});

export const Store = createStore(rootReducer,applyMiddleware(thunk));