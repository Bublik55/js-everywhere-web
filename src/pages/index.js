import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; import { useQuery, gql } from '@apollo/client';
const IS_LOGGED_IN = gql`
{
	isLoggedIn @client
}
`;
import Layout from '../components/Layout';

import Home from './home';
import NotePage from './note';
import MyNotes from './mynotes';
import Favorites from './favorites';
import SignUp from './signup';
import SignIn from './signin';



const PrivateRoute = ({ component: Component, ...rest }) => {
	const { loading, error, data } = useQuery(IS_LOGGED_IN);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;
	return (
		<Route
			{...rest}
			render={props =>
				data.isLoggedIn === true ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/signin',
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
};

const Pages = () => {
	return (
		<Router>
			<Layout>
				<Route exact path="/" component={Home} />
				<Route exact path="/note/:id" component={NotePage} />
				<PrivateRoute exact path="/mynotes" component={MyNotes} />
				<PrivateRoute exact path="/favorites" component={Favorites} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/signin" component={SignIn} />
			</Layout>
		</Router>
	);
};

export default Pages;
