import React from 'react';
import FilmImg from './filmImg';
import FilmTitle from './filmTitle';
import FilmRating from './filmRating';
import FilmYear from './filmYear';
import FilmDuration from './filmDuration';
import FilmSummary from './filmSummary';
import SearchButton from './searchButton';

const HeaderSelected = ({selectedFilm, onSearchLinkClick}) => {
  const {
    poster_path,
    title,
    vote_average,
    release_date,
    runtime,
    overview,
  } = selectedFilm;
  return (
    <div className="film row align-items-start">
      <div className="film__img col-4">
        <FilmImg url={poster_path} />
      </div>
      <div className="col-6">
        <div className="d-flex align-items-center">
          <FilmTitle title={title} />
          <FilmRating rating={vote_average} />
        </div>
        <div className="film__note mb-3">Oscar winning Movie</div>
        <div className="d-flex mb-3">
          <FilmYear date={release_date} />
          <FilmDuration duration={runtime} />
        </div>
        <FilmSummary summary={overview} />
      </div>
      <div className="col-2 d-flex justify-content-end">
        <SearchButton buttonHandler={onSearchLinkClick} />
      </div>
    </div>
  );
};

export default HeaderSelected;
