import React, { useEffect } from 'react';
import GithubItem from './GithubItem';
import Loading from '../loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsername } from '../../actions/githubActions';
import { getUser, isLoadingUser } from '../../selectors/githubSelectors';
import GithubSearch from './GithubSearch';
// import { useUsername } from '../../hooks/username';

const GithubPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(isLoadingUser);
  const username = useSelector(getUser);

  useEffect(() => {
    dispatch(fetchUsername());
  }, []);

  if(loading) return <Loading />;
  //user match params
  return (
    <>
      <GithubSearch username={username} />
      <GithubItem />
    </>
  );
};

export default GithubPage;
