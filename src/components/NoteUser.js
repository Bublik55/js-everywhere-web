import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_ME } from '../gql/query';
import DleteNote from './DleteNote';

const NoteUser = props => {

	const { loading, error, data } = useQuery(GET_ME);
	if (loading) return (<p> Loading ...</p>)
	if (error) return (<p> error {error.message}</p>)


	return (
		<React.Fragment>
			{data.me.id === props.note.author.id && (
				<React.Fragment>
					<DleteNote noteId={props.note.id} /> <br />
					<Link to={`/edit/${props.note.id}`}> Edit </Link>
				</React.Fragment>
			)}
			<br />
			Favorites: {props.note.favoriteCount}
		</React.Fragment>
	)
}

export default NoteUser;