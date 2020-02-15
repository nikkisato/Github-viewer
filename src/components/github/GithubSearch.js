import React, { useEffect } from 'react';

const GithubSearch = ({ searchTerm, handleChange }) => {
  return (
    <>
      <section>
        <input
          type='text'
          value={searchTerm}
          name={searchTerm}
          onChange={handleChange}
        />
      </section>
    </>
  );
};

GithubSearch.propTypes = {
  //
};

export default GithubSearch;
