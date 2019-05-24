import styled from 'styled-components';

export const BackHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`;

export const MovieContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 1200px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	align-self: center;

	@media (min-width: 1200px) {
		height: 425px;
		margin: 0 15px;
		width: 480px;
	}
`;

export const Video = styled.div`
	img:first-child {
		width: 85%;
	}

	img:last-child {
		display: none;
	}

	@media (min-width: 800px) {
		height: 285px;
		min-width: 480px;

		img:first-child {
			height: 285px;
			width: 480px;
			object-fit: fill;
		}

		img:last-child {
			display: block;
			z-index: 15;
			position: relative;
			width: 315px;
			height: 215px;
			top: -275px;
			left: 85px;
		}
	}
`;

export const Title = styled.div`
	margin: 0;
	font-size: 1.6em;
	font-weight: bold;
	padding-top: -5px;
	span {
		font-weight: 300;
		color: #444;
		font-size: 0.7em;
	}
`;

export const CompanyContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-top: 45px;
	padding-left: 25px;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-right: 8px;
		width: 75px;
		height: 75px;
	}

	img {
		height: 75px;
		width: 75px;
		object-fit: contain;
	}

	@media (min-width: 800px) {
		img {
			height: 150px;
			width: 150px;
		}

		div {
			margin-right: 15px;
			width: 150px;
			height: 150px;
		}
	}
`;

export const MovieInfo = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	align-self: center;
	width: 100%;
	padding-right: 45px;
	min-width: 250px;
	height: 425px;

	@media (max-width: 1200px) {
		padding: 45px;
		height: auto;
	}

	@media (min-width: 1600px) {
		min-width: 500px;
	}
`;

export const MovieGenres = styled.div`
	padding-top: 7px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	b {
		text-transform: uppercase;
		font-size: 1.1em;
		padding-right: 8px;
		color: #222;
		padding-top: 3px;
	}

	div {
		margin-top: 5px;
		border: 2px solid #e3e3e3;
		background: #eee;
		color: #222;
		border-radius: 3px;
		padding: 2px 5px;
		margin-right: 5px;
	}
`;

export const Website = styled.a`
	color: #000;
	font-size: 1.2em;
	padding-bottom: 3px;
	text-decoration: none;

	&:hover {
		color: #e8b831;
		cursor: pointer;
	}
`;

export const Description = styled.p`
	color: #000;
	font-size: 1.2em;
	letter-spacing: 0.02em;
`;

export const PosterImg = styled.img`
	height: 360px;
	min-width: 220px;
	margin-top: 5px;

	@media (max-width: 1200px) {
		display: none;
	}
`;
