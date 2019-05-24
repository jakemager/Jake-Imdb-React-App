import React from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
    font-family: sans-serif;
    background: #C2C2BE;
  }
`;

render(
	<Provider store={store}>
		<React.Fragment>
			<GlobalStyle />
			<App />
		</React.Fragment>
	</Provider>,
	document.getElementById('root')
);
