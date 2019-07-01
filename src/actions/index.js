import axios from 'axios';

export const showFilms = data => ({
  type: 'SHOW_FILMS',
  data,
});

export const sortFilms = ({data, sortValue}) => ({
  type: 'SORT_FILMS',
  data,
  sortValue,
});

export const toggleSearch = ({isFilmSearched, selectedFilmId}) => ({
  type: 'TOGGLE_SEARCH',
  isFilmSearched,
  selectedFilmId,
});

export const setSelectedFilm = ({selectedFilmId}) => ({
  type: 'SET_SELECTED_FILM',
  selectedFilmId,
});

export const setSearchFilter = searchBy => ({
  type: 'SET_SEARCH_FILTER',
  searchBy,
});

export function getFilms(data) {
  const {searchValue, searchBy, sortBy, sortOrder} = data;
  return dispatch => {
    axios
      .get('https://reactjs-cdp.herokuapp.com/movies', {
        params: {
          search: searchValue,
          searchBy,
          sortBy,
          sortOrder,
        },
      })
      .then(res => {
        dispatch(showFilms(res.data.data));
      })
      .catch(err => console.log(err));
  };
}
