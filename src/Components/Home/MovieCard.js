import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { Link } from 'react-router-dom';

const Box = posed.div({
	hoverable: true,
	pressable: true,
	init: {
		scale: 1,
		boxShadow: '0px 0px 0px rgba(0,0,0,0)'
	},
	hover: {
		scale: 1.08,
		boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
	},
	press: {
		scale: 1.02,
		boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
	}
});

const CardContainer = styled(Box)`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 200px;
	height: 300px;
	background: #000;
	color: #fff;
	margin: 5px 0;
	cursor: pointer;
	background: ${props => `url(https://image.tmdb.org/t/p/w500/${props.background})`};
	background-repeat: none;
	background-size: cover;
	background-position: center;
	border: 1px solid #191919;
	border-radius: 1px;
	background-color: #fff;

	@media (max-width: 400px) {
		min-width: 100vw;
		height: 450px;
	}
`;

const CardInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: rgba(0, 0, 0, 0.75);
	padding: 6px;
	font-weight: bold;
	font-size: 1em;
	min-height: 55px;
	text-align: left;
`;

const CardRating = styled.div`
	font-size: 0.7em;
	font-weight: normal;
`;

function MovieCard(props) {
	return (
		<Link to={`/movies/${props.data.id}`} style={{ textDecoration: 'none' }}>
			<CardContainer background={props.data.poster_path}>
				<CardInfo>
					{props.data.title}
					<CardRating>Rating: {props.data.vote_average} / 10</CardRating>
				</CardInfo>
			</CardContainer>
		</Link>
	);
}

export default MovieCard;
