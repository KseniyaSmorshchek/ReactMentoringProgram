import React from 'react';

const FilmsSort = ({onSortClick}) => (
  <>
    Sort by:
    <a
      href="#"
      className="main__founded-sort-button"
      data-sort="year"
      onClick={onSortClick}
    >
      release date
    </a>
    <a
      href="#"
      className="main__founded-sort-button"
      data-sort="rating"
      onClick={onSortClick}
    >
      rating
    </a>
  </>
);

export default FilmsSort;
