import React from 'react';
import PropTypes from 'prop-types';
import './GithubItem.css';

const Github = ({
  user: { name, avatar_url, bio, followers, following, html_url }
}) => (
  <>
    <section>
      <img src={avatar_url}></img>
      <h1>{name}</h1>
      <p>
        <b>Bio:</b> {bio}
      </p>
      <p>
        <b>Followers:</b> {followers}
      </p>
      <p>
        <b>Following: </b>
        {following}
      </p>
      <p>{html_url}</p>
      <a href='${html_url}'>{html_url}</a>
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
