import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware  from 'redux-thunk';
import apiMiddleware from './middleware/apiMiddleware';
import apiUtil from '../utility/api.util';
import rootReducer from './modules';

const initialState = {};
const middleware = [thunkMiddleware, apiMiddleware(apiUtil)];

/*
 * We create a default store with an initialState, the rootReducer which combines all of
 * our reducers, and our middleware.
 */
export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)