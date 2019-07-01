import React from 'react';
import FoundedData from './foundedData';
import FilmsList from './filmList';
import NoFilmsMessage from './noFilmsMessage';

const Main = props => {
  const {filmsData, selectedGenre, onSortClick, onFilmSelect} = props;
  return (
    <main className="main py-3">
      <div className="container">
        {filmsData.length > 0 ? (
          <>
            <FoundedData
              filmsNum={filmsData.length}
              onSortClick={onSortClick}
            />
            <FilmsList filmsData={filmsData} onFilmSelect={onFilmSelect} />
          </>
        ) : (
          <NoFilmsMessage />
        )}
      </div>
    </main>
  );
};

export default Main;
