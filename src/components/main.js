import React from 'react';
import FoundedData from "./foundedData";
import FilmsList from "./filmList";
import NoFilmsMessage from "./noFilmsMessage";

const Results = () => (
    <main className="main py-3">
        <div className="container">
            <FoundedData />
            <FilmsList />
            <NoFilmsMessage/>
        </div>
    </main>
);

export default Results;