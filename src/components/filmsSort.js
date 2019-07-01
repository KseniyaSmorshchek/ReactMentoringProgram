import React from 'react';

const FilmsSort = ({onSortClick, sortBy}) => (
  <>
    Sort by:
    <a
      href="#"
      className={
        'main__founded-sort-button ' +
        (sortBy === 'release_date' ? 'main__founded-sort-button--selected' : '')
      }
      data-sort="release_date"
      onClick={onSortClick}
    >
      release date
    </a>
    <a
      href="#"
      className={
        'main__founded-sort-button ' +
        (sortBy === 'vote_average' ? 'main__founded-sort-button--selected' : '')
      }
      data-sort="vote_average"
      onClick={onSortClick}
    >
      rating
    </a>
  </>
);

export default FilmsSort;
