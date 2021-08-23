import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MyNotes from './mynotes';
import Home from './home';
import Favorites from './favorites';

const Pages = () =>{
	return(
		<Router>
			<Route exact path = "/" component = {Home} />
			<Route exact path = "/mynotes" component = {MyNotes} />
			<Route exact path = "/favorites" component = {Favorites} />
		</Router>
	);
};

export default Pages;
