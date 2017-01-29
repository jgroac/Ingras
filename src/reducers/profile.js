
const defaultState = {
  currentProfile: null,
  profilePost: null
};

export default function profile (state = defaultState, action) {
  switch (action.type) {
    case 'SET_CURRENT_PROFILE':
      return { ...state, token: action.token };
    default:
      return state;
  }
}
