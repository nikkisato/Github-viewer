const request = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if (!ok) throw json;

      return json;
    });
};

export const getUser = () => request('/username');
export const getUserRepo = repo => request(`/username/${repo}`);
