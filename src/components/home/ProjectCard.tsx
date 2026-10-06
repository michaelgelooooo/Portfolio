import CueLink from "@/components/ui/CueLink";
import type { Project } from "@/data/projects";
import placeholderLandscape from "@/assets/images/placeholders/placeholder-landscape.jpg";

interface ProjectCardProps {
	project: Project;
	featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
	const { name, description, tags, link } = project;

	return (
		<div className={`card h-full gap-4 lg:gap-8 ${featured ? "lg:card-side" : ""} p-4 lg:p-8`}>
			<figure className={`aspect-21/9 border border-current/25 ${featured ? "lg:w-1/2 lg:shrink-0" : ""}`}>
				<img className="w-full h-full object-cover" src={placeholderLandscape} alt={`${name} preview`} />
			</figure>

			<div className="card-body p-0">
				<div className={`flex flex-col gap-4 flex-1 ${featured ? "justify-center" : ""}`}>
					<h2 className="card-title text-xl md:text-2xl lg:text-4xl">{name}</h2>

					<div className={`flex flex-col gap-4 ${featured ? "" : "mt-auto"}`}>
						<p className="text-sm md:text-base lg:text-lg opacity-50">{description}</p>

						<div className="flex flex-wrap gap-2">
							{tags.map((tag) => (
								<div key={tag} className="badge badge-xs md:badge-sm bg-base-300 border border-current/25">
									{tag}
								</div>
							))}
						</div>

						<div className="text-xs lg:text-sm">
							<CueLink to={link} icon="fa-arrow-right">
								VIEW PROJECT
							</CueLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
