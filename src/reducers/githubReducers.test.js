import {
  FETCH_USERNAME,
  FETCH_USERNAME_LOADING
} from '../actions/githubActions';
import reducer from './githubReducers';

describe('user reducer', () => {
  it('handles the fetch user loading action', () => {
    const action = { type: FETCH_USERNAME_LOADING };
    const initialState = { loading: false, user: [] };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      user: []
    });
  });

  it('handles the fetch user action', () => {
    const action = {
      type: FETCH_USERNAME,
      payload: [
        // {},
      ]
    };

    const initialState = {
      loading: true,
      user: []
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      user: []
    });
  });
});
