import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PoseGroup } from 'react-pose';

import { AppWrapper, AppHeader, Footer, FooterLinks, AppLogo, AppContent } from './App.styles';

import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';

function App() {
	if (!process.env.REACT_APP_IMDB_API)
		return (
			<div>
				This app needs the imdb api to run. Start the app with
				REACT_APP_IMDB_API='your_api_key_here'` <br />
				You can get the api key at{' '}
				<a href="https://www.themoviedb.org/account/signup">themoviedb.org</a>
			</div>
		);

	return (
		<Router basename="/imdb">
			<Route
				render={({ location }) => (
					<AppWrapper>
						<AppHeader>
							<AppLogo>
								<span>JAKe</span>
							</AppLogo>
						</AppHeader>
						<PoseGroup>
							<AppContent key={location}>
								<Switch>
									<Route path="/movies/:id" component={MovieDetails} />
									<Route component={Home} />
								</Switch>
							</AppContent>
						</PoseGroup>

						<FooterLinks />
						<Footer />
					</AppWrapper>
				)}
			/>
		</Router>
	);
}

export default App;
