import React from 'react'
import { useQuery, gql } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import NoteFeed from '../components/NoteFeed';
import Button from '../components/Button';

import { GET_NOTES } from '../gql/query';

const Home = () => {
	const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

	if (loading) return <p>LOADING...</p>;
	if (error) return <p>ERROR</p>;
	return (
	<React.Fragment>
		<NoteFeed notes = {data.noteFeed.notes} />
		{data.noteFeed.hasNextPage && (
			<Button onClick = {() =>
			fetchMore({
				variables: {
					cursor: data.noteFeed.cursor
				},
				updateQuery: (previouseResult, { fetchMoreResult } ) => {
					return ({
						noteFeed: {
							cursor: fetchMoreResult.noteFeed.cursor,
							hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
							notes: [
								...previouseResult.noteFeed.notes,
								...fetchMoreResult.noteFeed.notes,
							],
							__typename: 'noteFeed'
						}
					});
				}
			})}>Load More....</Button>
		)}
	</React.Fragment>
	)};

export default Home;