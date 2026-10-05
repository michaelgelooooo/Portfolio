import { useEffect, useState } from "react";

type Mode = "light" | "dark";

const THEMES: Record<Mode, string> = { light: "wireframe", dark: "black" };

function getInitialMode(): Mode {
	const saved = localStorage.getItem("theme");
	if (saved === "light" || saved === "dark") return saved;
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
	const [mode, setMode] = useState<Mode>(getInitialMode);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", THEMES[mode]);
		document.documentElement.style.colorScheme = mode;
		localStorage.setItem("theme", mode);
	}, [mode]);

	const isDark = mode === "dark";

	return (
		<button type="button" onClick={() => setMode(isDark ? "light" : "dark")} className={`theme-toggle ${isDark ? "swap-active" : ""}`} aria-label="Toggle dark mode" aria-pressed={isDark}>
			<i className="fa-regular fa-sun swap-off text-xl"></i>
			<i className="fa-regular fa-moon swap-on text-xl"></i>
		</button>
	);
}
