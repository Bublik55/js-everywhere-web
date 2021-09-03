import React from 'react';
import { useQuery, gql } from '@apollo/client'

import Note from '../components/Note'
import { GET_NOTE } from '../gql/query';

const NotePage = props => {
	const id = props.match.params.id;
	const { loading, error, data, } = useQuery(GET_NOTE, { variables: { id } });

	if (loading) return <div>loading...</div>;
	if (error) return <div>!error!</div>;
	return (
		<Note note={data.note} />
	)
}

export default NotePage;