import {
  FETCH_USERNAME_LOADING,
  FETCH_USERNAME
} from '../actions/githubActions';

const initialState = {
  loading: true,
  username: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERNAME_LOADING:
      return { ...state, loading: true };
    case FETCH_USERNAME:
      return { ...state, loading: false, username: action.payload };
    default:
      return state;
  }
}
