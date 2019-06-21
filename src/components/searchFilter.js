import React from 'react';

const SearchFilter = ({searchBy, searchByClick}) => (
  <>
    Search by:
    <a
      href="#"
      className={
        'search__filter-button ' +
        (searchBy === 'title' ? 'search__filter-button--selected' : '')
      }
      data-search="title"
      onClick={searchByClick}
    >
      title
    </a>
    <a
      href="#"
      className={
        'search__filter-button ' +
        (searchBy === 'genres' ? 'search__filter-button--selected' : '')
      }
      data-search="genres"
      onClick={searchByClick}
    >
      genre
    </a>
  </>
);

export default SearchFilter;
