import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function app (state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routerReducer,
  app
});


export default rootReducer;
