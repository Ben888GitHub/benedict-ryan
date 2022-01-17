import React from 'react';
import Link from 'next/link';

import {
	Section,
	SectionText,
	SectionTitle
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Hi there, <br />
					It&apos;s Ben here
				</SectionTitle>
				<SectionText>
					Creative Web Developer specializing in Front-end Development
				</SectionText>

				<Link href="#about" passHref>
					<Button onClick={props.handleClick}>Learn More</Button>
				</Link>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
