import { AUTHENTICATE_USER } from '../constants/actionTypes';

const defaultState = {
  token: null
};

export default function reducer (state = defaultState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return { ...state, token: action.token };
    default:
      return state;
  }
}
