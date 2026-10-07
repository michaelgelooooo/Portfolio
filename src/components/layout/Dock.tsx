import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "@/data/nav-items";

export default function MobileDock() {
  return (
    <nav className="dock dock-md md:hidden z-50 border-t border-current/25 font-ui">
      {NAV_ITEMS.map(({ to, label, icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => (isActive ? "dock-active" : "")}
        >
          <i className={`fa-solid ${icon} text-[1.2em]`} aria-hidden="true"></i>
          <span className="dock-label">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}