import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './userReducer';

function app (state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer
});


export default rootReducer;
