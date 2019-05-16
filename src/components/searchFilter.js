import React from 'react';

const SearchFilter = () => (
    <>
        Search by:
        <span className="search__filter-button search__filter-button--selected">title</span>
        <span className="search__filter-button">genre</span>
    </>
);

export default SearchFilter;