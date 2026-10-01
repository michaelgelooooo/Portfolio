import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <NavLink to="/">Your Name</NavLink>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/showcase">Showcase</NavLink>
                <NavLink to="/background">Background</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    );
}