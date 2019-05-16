import React from 'react';
import SearchButton from "./searchButton";
import SearchFilter from "./searchFilter";
import SearchInput from "./searchInput";

const HeaderSearch = (props) => {
        const { searchButtonHandler } = props;
   return (
       <div className="search row">
               <div className="search__input col-12 mb-3">
                       <SearchInput onSubmitHandler={searchButtonHandler}/>
               </div>
               <div className="search__filter col-6">
                       <SearchFilter />
               </div>
               <div className="col-6 d-flex justify-content-end">
                       <SearchButton buttonHandler={searchButtonHandler} />
               </div>
       </div>
   );
};

export default HeaderSearch;