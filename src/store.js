import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';


const logger = createLogger();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);


export default store;
