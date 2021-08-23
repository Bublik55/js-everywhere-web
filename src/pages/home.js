import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_NOTES = gql`
query noteFeed($cursor: String) {
	noteFeed(cursor: $cursor) {
	  cursor
	  hasNextPage
	  notes {
		id
		createdAt
		content
		favoriteCount
		author {
		  username
		  id
		  avatar
		  }
		}
	  }
	}
}
`;

const Home = () => {
	const {data, loading, error, fetchMore} = useQuery(GET_NOTES);

	if (loading) return <p>LOADING...</p>;
	if (error)	return <p>ERROR</p>;
	return (
		<div>
			{console.log(data)};
			<p>This is a home page with no Button</p>
		</div>
	);
};

export default Home;