import { DiReact, DiTerminal } from 'react-icons/di';
import {
	SiVercel,
	SiFirebase,
	SiGit,
	SiRedux,
	SiGraphql,
	SiNetlify,
	SiNextdotjs,
	SiTypescript
} from 'react-icons/si';
import { RiFlutterFill } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
/*
	NextJs
	React Query
	Vercel
	Redux
	Typescript
	Netlify
	Firebase
	TailwindCSS
	Bootstrap
*/

/*
	BitDev
	NX Monorepo
	Webflow
	Shopify
	Figma
	Framer
	ThreeJS
	Builder
	Windframe
	Jira

*/

export const Skills = [
	{
		slug: 'next',
		Component: SiNextdotjs,
		title: 'NextJS',
		Description: () => (
			<>Most of my projects are built with React.js and Next.js</>
		)
	},
	{
		slug: 'react',
		Component: DiReact,
		title: 'React',
		Description: () => (
			<>Most of my projects are built with React.js and Next.js</>
		)
	},
	{
		slug: 'vercel',
		Component: SiVercel,
		title: 'Vercel',
		Description: () => (
			<>
				I incorporate Vercel Edge Functions and Deployment for all my NextJS
				projects
			</>
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
		slug: 'typescript',
		Component: SiTypescript,
		title: 'TypeScript',
		Description: () => (
			<>
				TypeScript helps me to optimize the Code Quality & Readability (Clean
				Code Practices).
			</>
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
