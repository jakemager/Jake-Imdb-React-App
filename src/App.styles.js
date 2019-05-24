import styled from 'styled-components';
import posed from 'react-pose';

export const AppHeader = styled.div`
	height: 85px;
	display: flex;
	padding: 0 20px;
	justify-content: left;
	align-items: center;
	background-color: #191919;
	color: #fff;
`;

export const AppLogo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100px;
	height: 50px;
	border-radius: 3px;
	background: #e8b706;
	color: #000;
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
	font-weight: bold;
	font-size: 2.2em;
`;

export const AppWrapper = styled.div`
	text-align: center;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0;

	@media (min-width: 1025px) {
		margin: 0 75px;
	}
`;

const RouteContainer = posed.div({
	enter: {
		opacity: 1,
		beforeChildren: true,
		delay: 1000
	},
	exit: {
		opacity: 0
	}
});

export const AppContent = styled(RouteContainer)`
	padding: 15px;
	min-height: 65vh;
	height: auto;
`;

export const FooterLinks = styled.div`
	height: 35px;
	width: 100%;
	background-color: #e8b706;
`;

export const Footer = styled.div`
	height: 150px;
	width: 100%;
	background-color: #191919;
`;

export const Button = styled.button`
	height: 32px;
	margin: 0;
	margin-left: 2px;
	border: 1px solid #ccc;
	background: #fff;
	color: #191919;
	font-size: 0.9em;
	border-radius: 3px;
	min-width: 55px;

	&:hover {
		background: #e3e3e3;
		cursor: pointer;
	}
`;
