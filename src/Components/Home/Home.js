import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import MovieCard from './MovieCard';

import { setSortBy, setPage, setSearch, setUrl, setMovies } from '../../actions/home';

import { Button } from '../../App.styles.js';

const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 15px;

	@media (max-width: 400px) {
		padding: 0;
	}
`;

const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 1025px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const MoviesContainer = styled.div`
	padding-top: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	justify-items: center;
`;

const TextInput = styled.input`
	width: 225px;
	height: 20px;
	font-size: 16px;
	padding: 5px;
	border-radius: 3px;
	border: 1px solid #e8e8e8;
`;

const SortBy = styled.div`
	@media (max-width: 1025px) {
		padding-top: 15px;
	}
`;

const Select = styled.select`
	width: 150px;
	height: 34px;
	font-size: 0.9em;
	padding: 5px 35px 5px 5px;
	border: 1px solid #ccc;
	margin-left: 10px;
	background: #fff;
`;

const PageNavContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	font-size: 0.8em;
	align-items: center;

	span {
		padding: 0 10px;
	}
`;

function Home(props) {
	useEffect(() => {
		if (!!props.url)
			axios.get(`${props.url}&page=${props.page}`).then(res => {
				props.setMovies(res.data.results);
			});
	}, [props.url, props.page]);

	const changeSortBy = sortBy => {
		let url;
		switch (sortBy) {
			case 'topRated':
				url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${
					process.env.REACT_APP_IMDB_API
				}`;
				break;
			case 'nowPlaying':
				url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
					process.env.REACT_APP_IMDB_API
				}`;
				break;
			default:
				// case 'popularity' and default
				url = `https://api.themoviedb.org/3/movie/popular?api_key=${
					process.env.REACT_APP_IMDB_API
				}`;
		}

		axios.get(`${url}&page=1`).then(res => {
			props.setPage(1);
			props.setUrl(url);
			props.setSortBy(sortBy);
			props.setSearch('');
		});
	};

	const runSearch = e => {
		if (!!e) e.preventDefault();

		if (props.search.length) {
			let url = `https://api.themoviedb.org/3/search/movie?api_key=${
				process.env.REACT_APP_IMDB_API
			}&language=en-US&query=${props.search}&include_adult=false&page=1`;

			axios.get(url).then(res => {
				props.setPage(1);
				props.setUrl(url);
			});
		}
	};

	const changePage = dir => {
		if (props.page + dir >= 1) {
			props.setPage(props.page + dir);
		}
	};

	return (
		<HomeContainer>
			<Header>
				<form onSubmit={runSearch} style={{ display: 'flex' }}>
					<TextInput
						type="text"
						placeholder="Search for movie"
						onChange={e => props.setSearch(e.target.value)}
						value={props.search}
					/>
					<Button>Search</Button>
				</form>
				<SortBy>
					Sort by:
					<Select onChange={e => changeSortBy(e.target.value)} value={props.sortBy}>
						<option value="popularity">Popularity</option>
						<option value="nowPlaying">Now Playing</option>
						<option value="topRated">Top Rated</option>
					</Select>
				</SortBy>
			</Header>

			<MoviesContainer>
				{props.movies.map((movie, i) => (
					<MovieCard key={i} data={movie} />
				))}
			</MoviesContainer>

			<PageNavContainer>
				<Button onClick={() => changePage(-1)}>Prev</Button>
				<span>Page {props.page}</span>
				<Button onClick={() => changePage(1)}>Next</Button>
			</PageNavContainer>
		</HomeContainer>
	);
}

const mapStateToProps = state => ({
	page: state.home.page,
	sortBy: state.home.sortBy,
	search: state.home.search,
	url: state.home.url,
	movies: state.home.movies
});

export default connect(
	mapStateToProps,
	{ setSortBy, setPage, setSearch, setUrl, setMovies }
)(Home);
