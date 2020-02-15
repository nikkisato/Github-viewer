import React from 'react';
import PropTypes from 'prop-types';

const Github = ({ name, avatar_url, bio, followers, following }) => (
  <>
    <section>
      {/* <div
        style={{
          width: '20vw',
          height: '20vh',
          background: URL(`${avatar_url}`)
        }}
      ></div> */}
      <img src={avatar_url}></img>
      <h1>{name}</h1>
      <p>Bio: {bio}</p>
      <p>Followers: {followers}</p>
      <p>Following: {following}</p>
      <a href='${html_url}'>
        <p>Link to Github</p>
      </a>
    </section>
  </>
);

Github.propTypes = {
  name: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  followers: PropTypes.Number.isRequired,
  following: PropTypes.Number.isRequired
};

export default Github;
