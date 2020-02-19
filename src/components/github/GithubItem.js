import React from 'react';
import PropTypes from 'prop-types';

const Github = ({
  user: { name, avatar_url, bio, followers, following, html_url }
}) => (
  <>
    <section>
      <img src={avatar_url}></img>
      <h1>{name}</h1>
      <p>Bio: {bio}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <a href='${html_url}'>
        <p>Link to Github</p>
      </a>
      <a href='${repos_url}'>
        <p>Link to Repo</p>
      </a>
    </section>
  </>
);

Github.propTypes = {
  name: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  followers: PropTypes.Number,
  following: PropTypes.Number
};

export default Github;
