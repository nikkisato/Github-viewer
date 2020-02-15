import { isLoadingUser, getUser } from './githubSelectors';
describe('user Selectors', () => {
  it('selects the user loading state', () => {
    const state = {
      username: {
        loading: true,
        username: []
      }
    };

    const loading = isLoadingUser(state);

    expect(loading).toEqual(true);
  });

  it('selects the user state', () => {
    const state = {
      username: {
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
      }
    };

    const user = getUser(state);

    expect(user).toEqual([
      {
        avatar_url: 'https://avatars3.githubusercontent.com/u/54095031?v=4',
        html_url: 'https://github.com/nikkisato',
        name: 'Nikki Sato',
        bio:
          'Hello there! A fun-sized nerd here! I love learning, exploring the world, and the world of coding! \r\n',
        followers: 3,
        following: 2
      }
    ]);
  });
});
