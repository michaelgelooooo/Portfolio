import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ui/ThemeToggle";

type NavItem = {
	to: string;
	number: string;
	label: string;
	end?: boolean;
};

const NAV_ITEMS: NavItem[] = [
	{ to: "/", number: "01", label: "Home", end: true },
	{ to: "/showcase", number: "02", label: "Showcase" },
	{ to: "/background", number: "03", label: "Background" },
	{ to: "/contact", number: "04", label: "Contact" },
];

export default function Header() {
	return (
		<header className="navbar bg-base-100 border-b border-current/25 px-4 lg:px-8 sticky top-0 z-50">
			<div className="navbar-start">
				<Link to="/" className="btn btn-ghost border-0 text-4xl px-2">
					<h1>Michæl.</h1>
				</Link>
			</div>

			<nav className="navbar-center hidden md:inline">
				<ul className="flex items-center gap-4 lg:gap-8">
					{NAV_ITEMS.map(({ to, number, label, end }) => (
						<li key={to}>
							<NavLink to={to} end={end} className="nav-link">
								<span className="opacity-50 me-1 hidden lg:inline">{number}</span> {label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<div className="navbar-end">
				<ThemeToggle />
			</div>
		</header>
	);
}
