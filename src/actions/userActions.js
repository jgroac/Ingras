import { AUTHENTICATE_USER } from '../constants/actionTypes';

export const authenticate = (token) => {
  return {
    type: AUTHENTICATE_USER,
    token
  };
};

