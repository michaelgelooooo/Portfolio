import CueLink from "@/components/ui/CueLink";

export default function Footer() {
	return (
		<footer className="footer border-t border-current/25 px-4 py-4 sm:px-8">
			<div className="flex w-full flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
				<div>
					<div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
						<h1 className="text-2xl">Michæl.</h1>
						<span className="text-sm opacity-75">| Full-Stack Developer</span>
					</div>

					<p className="italic opacity-75">"Habit is second nature"</p>
				</div>

				<div className="flex flex-col items-center gap-1 md:items-end">
					<div className="text-sm">
						<CueLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} icon="fa-arrow-up" iconPosition="before">
							BACK TO TOP
						</CueLink>
					</div>

					<p className="text-sm opacity-50">© 2026 Michæl. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
