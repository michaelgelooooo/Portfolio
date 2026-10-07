import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_ITEMS } from "@/data/nav-items";

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
