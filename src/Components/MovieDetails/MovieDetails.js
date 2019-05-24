import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import generate from '@babel/generator';

import { Button } from '../../App.styles.js';
import {
	BackHeader,
	MovieContainer,
	TitleContainer,
	Title,
	MovieInfo,
	MovieGenres,
	Description,
	CompanyContainer,
	Website,
	PosterImg,
	Video
} from './MovieDetails.styles';

function MovieDetails(props) {
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		if (!!props.match && !!props.match.params && !!props.match.params.id) {
			axios
				.get(
					`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${
						process.env.REACT_APP_IMDB_API
					}&language=en-US`
				)
				.then(res => {
					console.log(res.data);
					setMovie(res.data);
				});

			axios
				.get(
					`https://api.themoviedb.org/3/movie/${props.match.params.id}/videos?api_key=${
						process.env.REACT_APP_IMDB_API
					}&language=en-US
				`
				)
				.then(res => console.log('trailer', res.data));
		}
	}, []);

	if (!!!movie) return <div />;
	return (
		<div>
			<BackHeader>
				<Link style={{ textDecoration: 'none', color: '#000' }} to={`/`}>
					<Button>Back</Button>
				</Link>
			</BackHeader>
			<MovieContainer>
				<PosterImg src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
				<TitleContainer>
					<Title>
						{movie.title} <span>({movie.release_date.split('-')[0]})</span>
					</Title>
					<p>{movie.tagline}</p>
					<Video>
						<img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
						<img src="/playBtn.png" />
					</Video>
				</TitleContainer>
				<MovieInfo>
					{movie.homepage && (
						<div style={{ borderBottom: '1px solid #000' }}>
							<Website href={movie.homepage}>Offical Website</Website>
						</div>
					)}
					<MovieGenres>
						<b>Genres:</b>
						{movie.genres.map(genre => (
							<div>{genre.name}</div>
						))}
					</MovieGenres>
					<Description>{movie.overview}</Description>
				</MovieInfo>
			</MovieContainer>
			<CompanyContainer>
				{movie.production_companies.map((company, i) => (
					<div key={i}>
						{!!company.logo_path ? (
							<img
								src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
								alt={company.name}
							/>
						) : (
							company.name
						)}
					</div>
				))}
			</CompanyContainer>
		</div>
	);
}

export default MovieDetails;
