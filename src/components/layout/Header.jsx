import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ui/ThemeToggle.jsx";

const NAV_ITEMS = [
    { to: "/", number: "01", label: "Home", end: true },
    { to: "/showcase", number: "02", label: "Showcase" },
    { to: "/background", number: "03", label: "Background" },
    { to: "/contact", number: "04", label: "Contact" },
];

export default function Header() {
    return (
        <header className="navbar border-b border-current/25 px-8">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost border-0 text-2xl">
                    <h1>Michæl</h1>
                </Link>
            </div>

            <nav className="navbar-center">
                <ul className="flex items-center gap-8">
                    {NAV_ITEMS.map(({ to, number, label, end }) => (
                        <li key={to}>
                            <NavLink to={to} end={end} className="nav-link">
                                <span className="opacity-75 me-1">{number}</span> {label}
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