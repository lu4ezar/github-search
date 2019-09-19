// @flow
import React from 'react';
import styled from 'styled-components';
import type {
	Name,
	HtmlUrl,
	Description,
	StargazersCount,
	WatchersCount
} from '../types/data';

type Props = {
	name: Name,
	htmlUrl: HtmlUrl,
	description: Description,
	stargazersCount: StargazersCount,
	watchersCount: WatchersCount
};

const StyledProject = styled.div`
	border: 1px solid black;
	border-radius: 4px;
	margin: 1em;
	padding: 0.5em;
`;

const Project = ({
	name,
	htmlUrl,
	description,
	stargazersCount,
	watchersCount
}: Props) => (
	<StyledProject>
		<h3>
			<a href={htmlUrl} target='_blank' rel='noopener noreferrer'>
				{name}
			</a>
		</h3>
		<p>{description}</p>
		<div>
			Stargazers: {stargazersCount}
			{` `} Watchers: {watchersCount}
		</div>
	</StyledProject>
);

export default Project;
