import {
  FETCH_USERNAME_LOADING,
  FETCH_USERNAME
} from '../actions/githubActions';
const initialState = {
  user: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERNAME_LOADING:
      return { ...state, loading: true };
    case FETCH_USERNAME:
      return { ...state, loading: false, user: action.payload };
    default:
      return state;
  }
}
