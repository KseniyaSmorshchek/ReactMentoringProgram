import React from 'react';

const SearchInput = ({onSubmitHandler}) => (
    <input type="text" placeholder="Find your movie ..." onKeyPress={onSubmitHandler}/>
);

export default SearchInput;