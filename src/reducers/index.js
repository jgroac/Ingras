import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import profileReducer from './profile';
import postsReducer from './posts';


const rootReducer = combineReducers({
  routing: routerReducer,
  profile: profileReducer,
  posts: postsReducer
});


export default rootReducer;
