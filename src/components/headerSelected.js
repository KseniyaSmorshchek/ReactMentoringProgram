import React from 'react';
import FilmImg from "./filmImg";
import FilmTitle from "./filmTitle";
import FilmRating from "./filmRating";
import FilmYear from "./filmYear";
import FilmDuration from "./filmDuration";
import FilmSummary from "./filmSummary";
import SearchButton from "./searchButton";

const HeaderSelected = ({selectedFilm, onSearchLinkClick}) => {
    return (
        <div className="film row align-items-start">
            <div className="film__img col-4">
                <FilmImg url={selectedFilm.filmImg} />
            </div>
            <div className="col-6">
                <div className="d-flex align-items-center">
                    <FilmTitle title={selectedFilm.filmTitle} />
                    <FilmRating rating={selectedFilm.filmRating} />
                </div>
                <div className="film__note mb-3">Oscar winning Movie</div>
                <div className="d-flex mb-3">
                    <FilmYear year={selectedFilm.filmYear} />
                    <FilmDuration duration={selectedFilm.filmDuration}/>
                </div>
                <FilmSummary summary={selectedFilm.filmSummary}/>
            </div>
            <div className="col-2 d-flex justify-content-end">
                <SearchButton buttonHandler={onSearchLinkClick} />
            </div>
        </div>
    );
};

export default HeaderSelected;