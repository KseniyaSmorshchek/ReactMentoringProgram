import React from 'react';
import FilmImg from "./filmImg";
import FilmTitle from "./filmTitle";
import FilmGenre from "./filmGenre";
import FilmYear from "./filmYear";

const FilmItem = ({onFilmSelect, item}) => {
    const { filmImg, filmTitle, filmGenre, filmYear, id } = item;

    return (
        <div className="item col-4">
            <a href="#" id={id} onClick={onFilmSelect}>
                <div className="item__img d-flex justify-content-center mb-3">
                    <FilmImg url={filmImg}/>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="item__data">
                        <FilmTitle title={filmTitle}/>
                        <FilmGenre genre={filmGenre}/>
                    </div>
                    <FilmYear year={filmYear}/>
                </div>
            </a>
        </div>
    );
};

export default FilmItem;