import {
  TOGGLE_SEARCH,
  SET_SELECTED_FILM,
  SORT_FILMS,
  SHOW_FILMS,
  SET_SEARCH_FILTER,
} from '../actions/types';

const initialState = {
  data: [],
  isFilmSearched: false,
  searchBy: 'title',
  sortBy: 'release_date',
  sortOrder: 'desc',
  selectedFilmId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FILMS:
      return {
        ...state,
        data: action.data,
        isFilmSearched: true,
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        isFilmSearched: action.isFilmSearched,
        selectedFilmId: action.selectedFilmId,
      };
    case SET_SELECTED_FILM:
      return {
        ...state,
        selectedFilmId: action.selectedFilmId,
      };
    case SORT_FILMS:
      return {
        ...state,
        data: action.data,
        sortBy: action.sortValue,
      };
    case SET_SEARCH_FILTER:
      return {
        ...state,
        searchBy: action.searchBy,
      };
    default:
      return state;
  }
};
