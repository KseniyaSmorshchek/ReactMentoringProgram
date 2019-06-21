import React from 'react';
import FilmImg from './filmImg';
import FilmTitle from './filmTitle';
import FilmGenre from './filmGenre';
import FilmYear from './filmYear';

const FilmItem = ({onFilmSelect, item}) => {
  const {poster_path, title, genres, release_date, id} = item;
  return (
    <div className="item col-4 mb-4">
      <a href="#" id={id} onClick={onFilmSelect}>
        <div className="item__img d-flex justify-content-center mb-3">
          <FilmImg url={poster_path} />
        </div>
        <div className="d-flex justify-content-around">
          <div className="item__data">
            <FilmTitle title={title} />
            <FilmGenre genres={genres} />
          </div>
          <FilmYear date={release_date} />
        </div>
      </a>
    </div>
  );
};

export default FilmItem;
