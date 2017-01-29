import {
  REQUEST_USER_PROFILE,
  RECEIVE_USER_PROFILE,
} from '../constants/actionTypes';

const defaultState = {
  currentProfile: null,
  onFetch: false
};

export default function profile (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_USER_PROFILE:
      return { ...state, onFetch: true };
    case RECEIVE_USER_PROFILE:
      return {...state, currentProfile: action.profile, onFetch: false };
    default:
      return state;
  }
}
