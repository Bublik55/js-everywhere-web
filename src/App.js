// index.js
// This is the main entry point of our application
import React from 'react';
import ReactDOM from 'react-dom'
import GlobalStyle from './components/GlobalStyle';
import Pages from './pages';

import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

const uri = process.env.API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({
	uri,
	cache,
	connectToDevTools: true
});

const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Pages />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));