import { DiReact, DiTerminal } from 'react-icons/di';
import {
	SiJava,
	SiFirebase,
	SiGit,
	SiRedux,
	SiGraphql,
	SiNetlify
} from 'react-icons/si';
import { RiFlutterFill } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';

export const Skills = [
	{
		slug: 'react',
		Component: DiReact,
		title: 'React',
		Description: () => (
			<>Most of my projects are built with Create-React-App or Next.js</>
		)
	},
	{
		slug: 'firebase',
		Component: SiFirebase,
		title: 'Firebase',
		Description: () => (
			<>I have used Firebase for auth, database & analytics in my apps.</>
		)
	},
	{
		slug: 'redux',
		Component: SiRedux,
		title: 'Redux',
		Description: () => (
			<>
				Redux or Context API are used mostly in larger applications for State
				Management
			</>
		)
	},
	{
		slug: 'graphql',
		Component: SiGraphql,
		title: 'GraphQL',
		Description: () => (
			<>I use GraphQL along with Apollo Client for querying GraphQL API.</>
		)
	},
	{
		slug: 'nodejs',
		Component: FaNodeJs,
		title: 'NodeJs',
		Description: () => (
			<>
				NodeJs is a backend language that I use for logic creation and setup of
				API that requires the server to access
			</>
		)
	},

	{
		slug: 'git',
		Component: SiGit,
		title: 'Git',
		Description: () => (
			<>Git is a tool that I use every day. I use GitHub for pushing my code.</>
		)
	}
];
