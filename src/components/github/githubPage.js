import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GithubItem from './GithubItem';
import Loading from '../loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsername } from '../../actions/githubActions';
import { getUser, isLoadingUser } from '../../selectors/githubSelectors';
import GithubSearch from './GithubSearch';
import { useUsername } from '../../hooks/username';

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
      <section>
        <GithubSearch />
        <GithubItem />
      </section>
    </>
  );
};

GithubPage.propTypes = {
  //
};

export default GithubPage;
