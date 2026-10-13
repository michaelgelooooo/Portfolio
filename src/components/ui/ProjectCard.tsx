import type { Project } from "@/data/projects";
import placeholderLandscape from "@/assets/images/placeholders/placeholder-landscape.jpg";

interface ProjectCardProps {
	project: Project;
	featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
	const { name, description, tags } = project;

	return (
		<div className={`card card-side h-full gap-2 md:gap-4 p-2 md:p-4 ${featured ? "" : "md:flex-col"}`}>
			<figure className={`w-1/3 shrink-0 aspect-4/3 md:aspect-21/9 border border-current/25 ${featured ? "md:w-1/2" : "md:w-full"}`}>
				<img className="w-full h-full object-cover" src={placeholderLandscape} alt={`${name} preview`} />
			</figure>

			<div className="card-body p-0">
				<div className={`flex flex-col gap-2 flex-1 justify-center md:justify-between ${featured ? "md:justify-center" : ""}`}>
					<h2 className="card-title text-lg md:text-xl lg:text-2xl">{name}</h2>

					<div className={`flex flex-col gap-2 ${featured ? "" : "md:mt-auto"}`}>
						<p className="hidden md:block text-xs md:text-sm lg:text-base opacity-60">{description}</p>

						<div className="flex flex-wrap gap-2">
							{tags.map((tag) => (
								<div key={tag} className="badge badge-xs md:badge-sm bg-base-300 border border-current/25">
									{tag}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
