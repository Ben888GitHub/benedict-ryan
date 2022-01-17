import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle
} from '../../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle
} from './TechnologiesStyles';
import { Skills } from './Skills';

const Technologies = () => (
	<Section id="tech">
		<SectionDivider divider />
		<SectionTitle>Skills</SectionTitle>
		<SectionText>
			As a Front-end Developer, I&apos;ve worked with a range of technologies to
			build Web and Mobile Applications.
		</SectionText>
		<List>
			{Skills.map((Skill) => (
				<ListItem key={Skill.slug}>
					<picture>
						<Skill.Component size="3rem" />
					</picture>
					<ListContainer>
						<ListTitle>{Skill.title}</ListTitle>
						<ListParagraph>
							<Skill.Description />
						</ListParagraph>
					</ListContainer>
				</ListItem>
			))}
		</List>
		<SectionDivider colorAlt />
	</Section>
);

export default Technologies;
