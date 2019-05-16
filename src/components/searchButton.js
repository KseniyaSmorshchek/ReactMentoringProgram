import React from 'react';

const SearchButton = (props) => {
    const { buttonHandler } = props;
    return (
        <a href="#" className="button" onClick={buttonHandler}>
            Search
        </a>
    )
};

export default SearchButton;