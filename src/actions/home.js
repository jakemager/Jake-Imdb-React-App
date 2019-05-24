import { SET_SORT, SET_PAGE, SET_SEARCH, SET_URL, SET_MOVIES } from '../reduxConstants/home';

export const setSortBy = sortBy => ({
	type: SET_SORT,
	sortBy
});

export const setPage = page => ({
	type: SET_PAGE,
	page
});

export const setSearch = search => ({
	type: SET_SEARCH,
	search
});

export const setUrl = url => ({
	type: SET_URL,
	url
});

export const setMovies = movies => ({
	type: SET_MOVIES,
	movies
});
