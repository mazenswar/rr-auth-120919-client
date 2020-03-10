import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/rootReducer';

const middleware = applyMiddleware(thunk);

export default createStore(rootReducer, middleware);
