import {
  FETCH_USERNAME,
  FETCH_USERNAME_LOADING
} from '../actions/githubActions';
import reducer from './githubReducers';

describe('user reducer', () => {
  it('handles the fetch user loading action', () => {
    const action = { type: FETCH_USERNAME_LOADING };
    const initialState = { loading: false, username: null };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      username: null
    });
  });

  it('handles the fetch user action', () => {
    const action = {
      type: FETCH_USERNAME,
      payload: [
        {
          avatar_url: 'https://avatars3.githubusercontent.com/u/54095031?v=4',
          html_url: 'https://github.com/nikkisato',
          name: 'Nikki Sato',
          bio:
            'Hello there! A fun-sized nerd here! I love learning, exploring the world, and the world of coding! \r\n',
          followers: 3,
          following: 2
        }
      ]
    };

    const initialState = {
      loading: true,
      username: [
        {
          avatar_url: 'https://avatars3.githubusercontent.com/u/54095031?v=4',
          html_url: 'https://github.com/nikkisato',
          name: 'Nikki Sato',
          bio:
            'Hello there! A fun-sized nerd here! I love learning, exploring the world, and the world of coding! \r\n',
          followers: 3,
          following: 2
        }
      ]
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      username: [
        {
          avatar_url: 'https://avatars3.githubusercontent.com/u/54095031?v=4',
          html_url: 'https://github.com/nikkisato',
          name: 'Nikki Sato',
          bio:
            'Hello there! A fun-sized nerd here! I love learning, exploring the world, and the world of coding! \r\n',
          followers: 3,
          following: 2
        }
      ]
    });
  });
});
