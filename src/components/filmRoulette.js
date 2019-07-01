import React, {Component} from 'react';
import Header from './header';
import Main from './main';
import utils from '../utils';

export default class FilmRoulette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          filmImg:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Kill_Bill_Volume_2.png/220px-Kill_Bill_Volume_2.png',
          filmTitle: 'Kill Bill',
          filmGenre: 'Drama',
          filmYear: 1995,
          filmDuration: 154,
          filmSummary:
            'A former assassin, known simply as The Bride (Uma Thurman), wakes from a coma four years after her jealous ex-lover Bill (David Carradine) attempts to murder her on her wedding day. Fueled by an insatiable desire for revenge, she vows to get even with every person who contributed to the loss of her unborn child, her entire wedding party, and four years of her life. After devising a hit list, The Bride sets off on her quest, enduring unspeakable injury and unscrupulous enemies.',
          filmRating: 4.5,
        },
        {
          id: 2,
          filmImg:
            'https://m.media-amazon.com/images/M/MV5BMDQ4MGY0NWUtY2MxOC00YzI5LTg0OTEtZjNmY2Q2ZmM0MTA1XkEyXkFqcGdeQXVyNTQzOTc3MTI@._V1_.jpg',
          filmTitle: 'Legend',
          filmGenre: 'Biography, Crime, Drama',
          filmYear: 2015,
          filmDuration: 132,
          filmSummary:
            'Suave, charming and volatile, Reggie Kray (Tom Hardy) and his unstable twin brother Ronnie start to leave their mark on the London underworld in the 1960s. Using violence to get what they want, the siblings orchestrate robberies and murders while running nightclubs and protection rackets. With police Detective Leonard "Nipper" Read hot on their heels, the brothers continue their rapid rise to power and achieve tabloid notoriety.',
          filmRating: 4.1,
        },
      ],
      isFilmSearched: false,
      selectedGenre: null,
      sortBy: null,
      selectedFilmId: null,
    };
  }

  onSearchButtonClick = e => {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      this.setState({isFilmSearched: true});
    }
  };

  onSearchLinkClick = () => {
    this.setState({isFilmSearched: false, selectedFilmId: null});
  };

  onFilmSelect = e => {
    this.setState({selectedFilmId: e.currentTarget.id});
  };

  onSortClick = e => {
    e.preventDefault();
    const sortValue = e.target.dataset.sort;
    let newData = [];

    if (sortValue === 'year') {
      newData = utils.sortArray(this.state.data, 'filmYear');
    } else if (sortValue === 'rating') {
      newData = utils.sortArray(this.state.data, 'filmRating');
    }
    this.setState({data: newData});
  };

  render() {
    const {
      selectedFilmId,
      data,
      selectedGenre,
      sortBy,
      isFilmSearched,
    } = this.state;
    return (
      <>
        <Header
          selectedFilmId={selectedFilmId}
          filmsData={data}
          searchButtonHandler={this.onSearchButtonClick.bind(this)}
          onSearchLinkClick={this.onSearchLinkClick.bind(this)}
        />
        {isFilmSearched ? (
          <Main
            filmsData={data}
            selectedGenre={selectedGenre}
            sortBy={sortBy}
            isFilmSelected={selectedFilmId}
            onFilmSelect={this.onFilmSelect.bind(this)}
            onSortClick={this.onSortClick}
          />
        ) : (
          ''
        )}
      </>
    );
  }
}
