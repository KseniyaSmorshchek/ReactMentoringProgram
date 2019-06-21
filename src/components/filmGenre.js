import React from 'react';

const FilmGenre = ({genres}) => (
  <p className="item__data-genre">{genres.join(', ')}</p>
);

export default FilmGenre;
