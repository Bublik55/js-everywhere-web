import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Favorites = () => {
	useEffect(() => {
		document.title = 'Favorites - Notedly';
	});

	return (
		<div>
			<h1><Link to = "/">Notedly</Link></h1>
			<p>These are my favorites</p>
		</div>
	);
};

export default Favorites;