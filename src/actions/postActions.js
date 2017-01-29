import request from 'reqwest';
import {
  REQUEST_USER_MEDIA,
  RECEIVE_USER_MEDIA
} from '../constants/actionTypes';

export const requestUserMedia = user => ({
  type: REQUEST_USER_MEDIA,
  user
});

export const receiveUserMedia = (media) => ({
  type: RECEIVE_USER_MEDIA,
  media
});


export const fetchUserPosts = user => dispatch => {
  dispatch(requestUserMedia(user));
  return request({
    url: `//api.instagram.com/v1/users/${user}/media/recent/?access_token=199403748.ec2cfbd.2571be47025648e49f14a18bcab79545`,
    type: 'jsonp',
    method: 'get'
  })
    .then( (response) => {console.log(response); dispatch(receiveUserMedia(response.data)); })
    .catch( (error) => console.log(error));
};
