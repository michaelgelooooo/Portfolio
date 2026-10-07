export type Skill = {
	name: string;
	icon: string;
};

export type SkillCategory = {
	label: string;
	items: Skill[];
};

export const HOME = {
	heading: "Michæl.",
	subheading: "I like making things work.",
	text: "I build full-stack applications from the interface to the underlying systems, with a focus on solving problems and creating useful experiences.",
};

export const ABOUT = {
	heading: "One Commit at a Time",
	text: ["I'm Michael Angelo A. Ochengco, an Information Technology graduate and full-stack web developer who enjoys turning ideas into digital experiences. I work across the frontend and backend to build practical solutions.", "Beyond development, I value consistency, curiosity, and continuous improvement. I enjoy learning how things work, exploring new ideas, and taking on challenges."],
	note: "Outside of development, I enjoy reading manga, listening to music, and gaming.",
};

export const SKILLS: SkillCategory[] = [
	{
		label: "LANGUAGES",
		items: [
			{ name: "JavaScript", icon: "devicon-javascript-plain" },
			{ name: "Python", icon: "devicon-python-plain" },
		],
	},
	{
		label: "FRONTEND",
		items: [
			{ name: "React.js", icon: "devicon-react-original" },
			{ name: "Vue.js", icon: "devicon-vuejs-plain" },
		],
	},
	{
		label: "BACKEND",
		items: [
			{ name: "Express.js", icon: "devicon-express-original" },
			{ name: "Django", icon: "devicon-django-plain" },
		],
	},
	{
		label: "DATABASE",
		items: [
			{ name: "PostgreSQL", icon: "devicon-postgresql-plain" },
			{ name: "MongoDB", icon: "devicon-mongodb-plain" },
		],
	},
	{
		label: "TOOLS",
		items: [
			{ name: "Git", icon: "devicon-git-plain" },
			{ name: "GitHub", icon: "devicon-github-original" },
		],
	},
];

export const PROJECTS = {
	heading: "Things I've Built",
};

export const CONNECT = {

    heading: "Let's Build Something Together.",

    text: "Have a project, an opportunity, or an idea you'd like to bring to life? Feel free to reach out and let's see what we can create together.",

};