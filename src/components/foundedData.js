import React from 'react';
import SelectedGenre from "./selectedGenre";
import FilmsNum from "./filmsNum";
import FilmsSort from "./filmsSort";

const FoundedData = (props) => {
    const { filmsNum, isFilmSelected, onSortClick } = props;
    return (
        <div className="main__founded row mb-4">
            {isFilmSelected ? (
                <SelectedGenre />
            ) : (
                <>
                    <div className="main__founded-number col-5">
                        <FilmsNum filmsNum={filmsNum}/>
                    </div>
                    <div className="main__founded-sort d-flex justify-content-end col-6">
                        <FilmsSort onSortClick={onSortClick} />
                    </div>
                </>
            )}
        </div>
    );
};

export default FoundedData;