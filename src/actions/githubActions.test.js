import { fetchUsername, FETCH_USERNAME } from './githubActions';

jest.mock('../services/githubApi.js');

describe('username Actions', () => {
  it('creates a fetch username action', () => {
    const dispatch = jest.fn();
    const action = fetchUsername('nikkisato');

    return action(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: 'FETCH_USERNAME_LOADING'
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: FETCH_USERNAME,
        payload: [
          {
            avatar_url: 'https://avatars3.githubusercontent.com/u/54095031?v=4',
            html_url: 'https://github.com/nikkisato',
            name: 'Nikki Sato',
            bio:
              'Hello there! A fun-sized nerd here! I love learning, exploring the world, and the world of coding! \r\n',
            followers: 3,
            following: 2,
          }
        ]
      });
    });
  });
});
