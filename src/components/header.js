import React from 'react';
import HeaderSearch from './headerSearch';
import HeaderSelected from './headerSelected';

const Header = props => {
  const {
    selectedFilmId,
    filmsData,
    searchButtonHandler,
    onSearchLinkClick,
  } = props;
  return (
    <header className="header py-4 mb-2">
      <div className="container">
        <div className="logo row mb-4">
          <div className="col-12">
            <h1 className="logo__text">netflixroulette</h1>
          </div>
        </div>
        {selectedFilmId ? (
          <HeaderSelected
            selectedFilm={
              filmsData.filter(item => item.id === +selectedFilmId)[0]
            }
            onSearchLinkClick={onSearchLinkClick}
          />
        ) : (
          <HeaderSearch searchButtonHandler={searchButtonHandler} />
        )}
      </div>
    </header>
  );
};

export default Header;
