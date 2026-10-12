export type Skill = {
	name: string;
	icon: string;
};

export type SkillCategory = {
	label: string;
	items: Skill[];
};

export const skills: SkillCategory[] = [
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

export const totalSkills = skills.flatMap(({ items }) => items).length;