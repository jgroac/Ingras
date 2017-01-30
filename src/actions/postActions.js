import request from 'reqwest';
import auth from '../utils/auth';

import {
  REQUEST_USER_MEDIA,
  RECEIVE_USER_MEDIA,
  SHOW_ALL_MEDIA,
} from '../constants/actionTypes';

export const requestUserMedia = user => ({
  type: REQUEST_USER_MEDIA,
  user
});

export const receiveUserMedia = (media) => ({
  type: RECEIVE_USER_MEDIA,
  media
});

export const showAllMedia = () => ({
  type: SHOW_ALL_MEDIA
});


export const fetchUserPosts = user => dispatch => {
  dispatch(requestUserMedia(user));
  return request({
    url: `//api.instagram.com/v1/users/${user}/media/recent/?access_token=${auth.getToken()}`,
    type: 'jsonp',
    method: 'get'
  })
    .then( response => dispatch(receiveUserMedia(response.data)))
    .catch( (error) => console.log(error));
};

export const getVisiblePosts = (posts) => {
  if (!posts.posts || posts.onFetch) return posts.posts;

  return posts.posts.filter((post, index) => {
    if (!posts.showAll & index > 11) return false;
    return true;
  });
};
