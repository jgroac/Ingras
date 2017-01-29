import { AUTHENTICATE_USER, DEAUTHENTICATE_USER } from '../constants/actionTypes';
import auth from '../utils/auth';

export const authenticate = (token) => {
  auth.authenticateUser(token);
  return {
    type: AUTHENTICATE_USER,

  };
};

export const logout = (token) => {
  auth.deauthenticateUser(token);
  return {
    type: DEAUTHENTICATE_USER,
  };
};

