import React, {Component} from 'react';
import Header from './header';
import Main from './main';
import utils from '../utils';
import connect from 'react-redux/es/connect/connect';
import {
  sortFilms,
  getFilms,
  toggleSearch,
  setSelectedFilm,
  setSearchFilter,
} from '../actions';

class FilmRoulette extends Component {
  onSearchFilm = e => {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      this.props.getFilms({
        searchValue: e.target.value,
        searchBy: this.props.searchBy || '',
        sortBy: this.props.sortBy || '',
        sortOrder: this.props.sortOrder || '',
      });
    }
  };

  onSearchLinkClick = () => {
    this.props.toggleSearch({isFilmSearched: false, selectedFilmId: null});
  };

  onFilmSelect = e => {
    this.props.setSelectedFilm({selectedFilmId: e.currentTarget.id});
  };

  onSortClick = e => {
    e.preventDefault();
    const sortValue = e.target.dataset.sort;
    const newData = utils.sortArray(this.props.data, sortValue);
    this.props.sortFilms({data: newData, sortValue});
  };

  searchByClick = e => {
    e.preventDefault();
    const searchBy = e.target.dataset.search;

    this.props.setSearchFilter(searchBy);
  };

  render() {
    const {
      data,
      isFilmSearched,
      selectedFilmId,
      selectedGenre,
      sortBy,
      searchBy,
    } = this.props;
    return (
      <>
        <Header
          selectedFilmId={selectedFilmId}
          filmsData={data}
          searchButtonHandler={this.onSearchFilm.bind(this)}
          onSearchLinkClick={this.onSearchLinkClick.bind(this)}
          searchBy={searchBy}
          searchByClick={this.searchByClick}
        />
        {isFilmSearched ? (
          <Main
            filmsData={data}
            selectedGenre={selectedGenre}
            isFilmSelected={selectedFilmId}
            onFilmSelect={this.onFilmSelect.bind(this)}
            onSortClick={this.onSortClick}
            sortBy={sortBy}
          />
        ) : (
          ''
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.filmRoulette.data,
  isFilmSearched: state.filmRoulette.isFilmSearched,
  searchBy: state.filmRoulette.searchBy,
  sortBy: state.filmRoulette.sortBy,
  sortOrder: state.filmRoulette.sortOrder,
  selectedFilmId: state.filmRoulette.selectedFilmId,
});

const mapDispatchToProps = dispatch => ({
  sortFilms: data => dispatch(sortFilms(data)),
  getFilms: value => dispatch(getFilms(value)),
  toggleSearch: data => dispatch(toggleSearch(data)),
  setSelectedFilm: selectedFilmId => dispatch(setSelectedFilm(selectedFilmId)),
  setSearchFilter: searchBy => dispatch(setSearchFilter(searchBy)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmRoulette);
