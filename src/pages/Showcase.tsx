import CueLink from "@/components/ui/CueLink";
import { SHOWCASE, PROJECTS, SKILLS } from "@/data/showcase";
import { projects } from "@/data/projects";
import { skills, totalSkills } from "@/data/skills";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Showcase() {
	return (
		<>
			<section id="home" className="layout min-h-0 bg-base-200 border-b border-current/25">
				<div className="layout-rail flex lg:flex-col gap-1">
					<span>01</span>
					<span className="inline lg:hidden">/</span>
					<span className="lg:opacity-80">SHOWCASE</span>
				</div>

				<div className="layout-panel flex flex-col gap-4 pb-4 md:pb-8 lg:py-16">
					<div className="grid grid-cols-1 lg:grid-cols-3">
						<div className="lg:col-span-2 space-y-1 md:space-y-2 lg:space-y-4">
							<div className="badge badge-primary badge-xs md:badge-sm lg:badge-md uppercase">{SHOWCASE.badge}</div>
							<h1 className="text-4xl md:text-6xl lg:text-8xl">{SHOWCASE.heading}</h1>

							<p className="text-base md:text-lg lg:text-xl opacity-80">{SHOWCASE.text}</p>
						</div>
						<div className="hidden lg:flex flex-col lg:col-span-1 items-end gap-2">
							<div className="badge p-4 cta-btn-alt hover:cursor-pointer">
								<span className="status bg-violet-600"></span>
								<span>CATALOG: {projects.length} PROJECTS</span>
							</div>
							<div className="badge p-4 cta-btn-alt hover:cursor-pointer">
								<span className="status bg-violet-600"></span>
								<span>REGISTER: {totalSkills} SKILLS</span>
							</div>
						</div>
					</div>

					<div className="divider m-0"></div>

					<div className="flex justify-between items-center">
						<div className="flex items-center gap-2 w-full sm:w-auto text-xs md:text-sm lg:text-base">
							<div className="opacity-80 hidden md:block">DIRECT JUMP:</div>

							<a className="btn btn-xs lg:btn-sm cta-btn-alt flex-1 sm:flex-none" href="#projects">
								<span className="status bg-violet-600 inline-block lg:hidden"></span>
								<span className="uppercase">PROJECTS</span>
								<span className="inline lg:hidden">[{projects.length}]</span>
								<i className="fas fa-arrow-down fa-xs"></i>
							</a>

							<a className="btn btn-xs lg:btn-sm cta-btn-alt flex-1 sm:flex-none" href="#skills">
								<span className="status bg-violet-600 inline-block lg:hidden"></span>
								<span className="uppercase">SKILLS</span>
								<span className="inline lg:hidden">[{totalSkills}]</span>
								<i className="fas fa-arrow-down fa-xs"></i>
							</a>
						</div>

						<div className="text-xs lg:text-sm hidden md:block">
							<CueLink to="/contact/" icon="fa-arrow-right">
								DIRECT INQUIRIES
							</CueLink>
						</div>
					</div>
				</div>
			</section>

			<section id="projects" className="layout bg-base-300 border-b border-current/25">
				<div className="layout-rail flex lg:flex-col gap-1">
					<span>02</span>
					<span className="inline lg:hidden">/</span>
					<span className="lg:opacity-80">PROJECTS</span>
				</div>

				<div className="layout-panel flex flex-col gap-1 md:gap-2 lg:gap-4 pb-4 md:pb-8 lg:py-16">
					<div className="flex flex-col lg:flex-row justify-between lg:items-end gap-2">
						<div className="space-y-1 md:space-y-2 lg:space-y-4">
							<div className="badge badge-primary badge-xs md:badge-sm lg:badge-md uppercase">{PROJECTS.badge}</div>
							<h1 className="text-2xl md:text-4xl lg:text-6xl">{PROJECTS.heading}</h1>
						</div>
						<div className="flex justify-between items-center gap-4">
							<div className="text-sm opacity-60">
								<span className="hidden md:inline">SHOWING</span> 1-6 of 12 <span className="hidden md:inline">PROJECTS</span>
							</div>
							<div className="space-x-2">
								<button className="btn btn-xs md:btn-sm cta-btn-alt">«</button>
								<button className="btn btn-xs md:btn-sm cta-btn-alt">[ 1 / 2 ]</button>
								<button className="btn btn-xs md:btn-sm cta-btn-alt">»</button>
							</div>
						</div>
					</div>

					<div className="divider m-0"></div>

					<div className="grid gap-1 md:gap-2 lg:gap-4 md:grid-cols-2 lg:grid-cols-3">
						{projects.map((project) => (
							<div key={project.name}>
								<ProjectCard project={project} />
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="skills" className="layout bg-base-200 border-b border-current/25">
				<div className="layout-rail flex lg:flex-col gap-1">
					<span>03</span>
					<span className="inline lg:hidden">/</span>
					<span className="lg:opacity-80">SKILLS</span>
				</div>

				<div className="layout-panel"></div>
			</section>

			<section id="connect" className="layout min-h-0 bg-base-300">
				<div className="layout-rail flex lg:flex-col gap-1">
					<span>04</span>
					<span className="inline lg:hidden">/</span>
					<span className="lg:opacity-80">CONNECT</span>
				</div>

				<div className="layout-panel"></div>
			</section>
		</>
	);
}
