import request from 'reqwest';
import { fetchUserPosts } from './postActions';
import auth from '../utils/auth';

import {
  SET_CURRENT_PROFILE,
  REQUEST_USER_PROFILE,
  RECEIVE_USER_PROFILE,
} from '../constants/actionTypes';

export const setCurrentProfile = user => ({
  type: SET_CURRENT_PROFILE,
  user
});

export const requestUserProfile = user => ({
  type: REQUEST_USER_PROFILE,
  user
});

export const receiveUserProfile = (profile) => ({
  type: RECEIVE_USER_PROFILE,
  profile
});

export const fetchUserProfile = user => dispatch => {
  dispatch(requestUserProfile(user));
  dispatch(fetchUserPosts(user));
  return request({
    url: `//api.instagram.com/v1/users/${user}/?access_token=${auth.getToken()}`,
    type: 'jsonp',
    method: 'get'
  })
    .then( (response) => {
      dispatch(receiveUserProfile(response.data));
      return response.data;
    })
    .catch( (error) => console.log(error));
};

const shouldFetchProfile = (state, userID) => {
  const profile = state.profile.currentProfile;

  if (!profile) return true;
  if (profile.onFetch) return false;
  if (userID !== profile.id) return true;

  return false;
};

export const fetchUserProfileIfNeeded = user => (dispatch, getState) => {
  if (shouldFetchProfile(getState(), user)) {
    return dispatch(fetchUserProfile(user));
  }
};

