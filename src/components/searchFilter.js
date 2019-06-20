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
        (searchBy === 'genre' ? 'search__filter-button--selected' : '')
      }
      data-search="genre"
      onClick={searchByClick}
    >
      genre
    </a>
  </>
);

export default SearchFilter;
