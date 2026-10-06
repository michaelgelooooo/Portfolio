import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type CueLinkProps = {
	to?: string;
	onClick?: () => void;
	children: ReactNode;
	icon?: string;
	iconPosition?: "before" | "after";
	className?: string;
};

function CueLink({ to, onClick, children, icon = "fa-arrow-down", iconPosition = "after", className = "" }: CueLinkProps) {
	const classes = `text-violet-500 font-semibold hover:opacity-50 ${className}`;

	const content = (
		<>
			{iconPosition === "before" && <i className={`fas ${icon} me-1`}></i>}
			<span>{children}</span>
			{iconPosition === "after" && <i className={`fas ${icon} ms-1`}></i>}
		</>
	);

	// No destination: it's an action, so render a button
	if (!to) {
		return (
			<button type="button" onClick={onClick} className={`${classes} cursor-pointer`}>
				{content}
			</button>
		);
	}

	const isAnchor = to.startsWith("#");
	const isExternal = /^(https?:|mailto:)/.test(to);

	if (isAnchor || isExternal) {
		return (
			<a href={to} className={classes} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
				{content}
			</a>
		);
	}

	return (
		<Link to={to} className={classes}>
			{content}
		</Link>
	);
}

export default CueLink;
