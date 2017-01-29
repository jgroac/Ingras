import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './user';
import profileReducer from './profile';
import postsReducer from './posts';


const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  profile: profileReducer,
  posts: postsReducer
});


export default rootReducer;
