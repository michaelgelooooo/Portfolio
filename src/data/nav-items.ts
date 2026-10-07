export type NavItem = {
	to: string;
	number: string;
	label: string;
	icon: string;
	end?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
	{ to: "/", number: "01", label: "Home", icon: "fa-id-card", end: true },
	{ to: "/showcase", number: "02", label: "Showcase", icon: "fa-laptop-code" },
	{ to: "/background", number: "03", label: "Background", icon: "fa-clock-rotate-left" },
	{ to: "/contact", number: "04", label: "Contact", icon: "fa-paper-plane" },
];
