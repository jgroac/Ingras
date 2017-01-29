import {
  REQUEST_USER_MEDIA,
  RECEIVE_USER_MEDIA
} from '../constants/actionTypes';

const defaultState = {
  posts: null,
  onFetch: false
};

export default function posts (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_USER_MEDIA:
      return { ...state, onFetch: true };
    case RECEIVE_USER_MEDIA:
      return {...state, posts: action.media, onFetch: false };
    default:
      return state;
  }
}
