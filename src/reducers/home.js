import { SET_SORT, SET_PAGE, SET_SEARCH, SET_URL, SET_MOVIES } from '../reduxConstants/home';

const initialState = {
	sortBy: 'popularity',
	page: 1,
	search: '',
	url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_IMDB_API}`,
	movies: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_SORT:
			return {
				...state,
				sortBy: action.sortBy
			};

		case SET_PAGE:
			return {
				...state,
				page: action.page
			};

		case SET_SEARCH:
			return {
				...state,
				search: action.search
			};

		case SET_URL:
			return {
				...state,
				url: action.url
			};

		case SET_MOVIES:
			return {
				...state,
				movies: action.movies
			};

		default:
			return state;
	}
}
