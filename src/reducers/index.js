import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './user';
import profileReducer from './profile';


const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  profile: profileReducer
});


export default rootReducer;
