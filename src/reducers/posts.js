import {
  REQUEST_USER_MEDIA,
  RECEIVE_USER_MEDIA,
  SHOW_ALL_MEDIA
} from '../constants/actionTypes';

const postsPerView = 12;
const defaultState = {
  posts: null,
  onFetch: false,
  showAll: false,
};

export default function posts (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_USER_MEDIA:
      return { ...state, onFetch: true, showAll: false };
    case RECEIVE_USER_MEDIA:
      return {
        ...state,
        posts: action.media,
        onFetch: false,
        showAll: action.media.length <= postsPerView
      };
    case SHOW_ALL_MEDIA:
      return {...state, showAll: true };
    default:
      return state;
  }
}
