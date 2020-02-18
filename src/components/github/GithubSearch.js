import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsername } from '../../actions/githubActions';
import PropTypes from 'prop-types';

const GithubSearch = ({ searchTerm }) => {
  const [username, setNewUsername] = useState('');
  const dispatch = useDispatch();

  const searchUser = event => {
    event.preventDefault();
    dispatch(fetchUsername(username));
  };

  return (
    <>
      <section>
        <h1>Input a Github Username!</h1>
        <form onSubmit={searchUser}>
          <input
            type='text'
            placeholder='Search username'
            value={searchTerm}
            name={searchTerm}
            onChange={({ target }) => setNewUsername(target.value)}
          />
          <button>Search User</button>
        </form>
      </section>
    </>
  );
};

GithubSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired
};

export default GithubSearch;
