import request from 'reqwest';

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
  return request({
    url: `//api.instagram.com/v1/users/${user}/?access_token=199403748.ec2cfbd.2571be47025648e49f14a18bcab79545`,
    type: 'jsonp',
    method: 'get'
  })
    .then( (response) => {console.log(response); dispatch(receiveUserProfile(response.data)); })
    .catch( (error) => console.log(error));
};




