export interface Project {
	name: string;
	description: string;
	tags: string[];
	link: string;
}

export const projects: Project[] = [
	{
		name: "Portfolio Website",
		description: "A personal portfolio website designed to showcase projects, technical skills, professional experience, and achievements.",
		tags: ["React", "Tailwind CSS"],
		link: "/showcase",
	},
	{
		name: "Task Management System",
		description: "A web-based task management application that helps users organize projects, track progress, and manage daily tasks.",
		tags: ["React", "Node.js", "MySQL"],
		link: "/showcase",
	},
	{
		name: "Inventory Management System",
		description: "A centralized inventory system for managing products, monitoring stock levels, and keeping track of inventory movements.",
		tags: ["Laravel", "MySQL", "Bootstrap"],
		link: "/showcase",
	},
	{
		name: "Event Registration Platform",
		description: "An online platform for creating events, managing registrations, and providing attendees with an organized event experience.",
		tags: ["React", "Express", "PostgreSQL"],
		link: "/showcase",
	},
	{
		name: "Community Information System",
		description: "A web application that provides centralized access to community information, records, announcements, and essential services.",
		tags: ["PHP", "MySQL", "JavaScript"],
		link: "/showcase",
	},
];
