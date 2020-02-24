import React, { useEffect, useState } from 'react';
import GithubItem from './GithubItem';
import Loading from '../loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsername } from '../../actions/githubActions';
import { getUser, isLoadingUser } from '../../selectors/githubSelectors';
import Header from '../header/Header';
import './GithubPage.css';

const GithubPage = () => {
  const [username, setNewUsername] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingUser);
  const user = useSelector(getUser);

  const handleClick = e => {
    e.preventDefault();
    dispatch(fetchUsername(username));
  };

  // loading ? (
  //   <Loading />
  // )

  return (
    <>
      <Header />
      <form onSubmit={handleClick}>
        <input
          type='text'
          placeholder='Search username'
          value={username}
          onChange={({ target }) => setNewUsername(target.value)}
        />
        <button>Search User</button>
      </form>
      {user ? <GithubItem user={user} /> : null}
    </>
  );
};

export default GithubPage;
