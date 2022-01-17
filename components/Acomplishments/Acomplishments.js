import React from 'react';

import {
	Section,
	SectionDivider,
	SectionTitle
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
	{ number: 50, text: 'Open Source Projects' },
	{ number: 70, text: 'Github Stars' },
	{ number: 2, text: 'Years of Bachelor Degree in IT' },
	{ number: 2, text: 'Hackathon Achievements' }
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Accomplishments</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.number}+`}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
		<SectionDivider />
	</Section>
);

export default Acomplishments;
