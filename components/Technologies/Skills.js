import { DiReact, DiTerminal } from 'react-icons/di';
import {
	SiVercel,
	SiFirebase,
	SiGit,
	SiRedux,
	SiTailwindcss,
	SiNetlify,
	SiNextdotjs,
	SiTypescript,
	SiBootstrap
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

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
				projects.
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
				Management.
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
			<>
				I have used Firebase for auth, database, storage & analytics in my apps.
			</>
		)
	},
	{
		slug: 'tailwindcss',
		Component: SiTailwindcss,
		title: 'TailwindCSS',
		Description: () => (
			<>
				I utilize Tailwind to construct my apps with holistic features of UI and
				Responsive Web Design.
			</>
		)
	},
	{
		slug: 'react query',
		Component: TbApi,
		title: 'React Query',
		Description: () => (
			<>
				I make use of React Query to optimize all API Functions across my
				project.
			</>
		)
	},

	{
		slug: 'bootstrap',
		Component: SiBootstrap,
		title: 'Bootstrap',
		Description: () => (
			<>
				Beside Tailwind, Bootstrap is the UI Framework that I use for my basic
				prototype projects or POCs.
			</>
		)
	}
];
