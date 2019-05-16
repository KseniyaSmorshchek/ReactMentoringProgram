import React from 'react';
import FilmItem from "./filmItem";

const FilmsList = ({filmsData, onFilmSelect}) => (
        <div className="main__items row">
            {filmsData.map(item => <FilmItem item={item} key={item.id} onFilmSelect={onFilmSelect}/>)}
        </div>
);

export default FilmsList;