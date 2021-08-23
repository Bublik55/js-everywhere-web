import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
const MyNotes = () => {
	useEffect(() => {
		document.title = 'My notes - Notedly'
	});

	return (
		<div>
			<h1><Link to = "/">Notedly</Link></h1>
			<p>These are my notes</p>
		</div>
	);
};

export default MyNotes;