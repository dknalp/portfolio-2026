import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export default function ProjectsSection() {
	return (
		<section id="projects">
			<div className="flex min-h-0 flex-col gap-y-6">
				<div className="flex flex-col gap-y-1">
					<h2 className="text-3xl font-semibold text-white/90 mb-1">My Projects</h2>
					<p className="text-sm text-zinc-400 mb-4">Things I've built.</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{DATA.projects.map((project, id) => (
						<ProjectCard
							href={project.href}
							key={project.title}
							title={project.title}
							description={project.description}
							dates={project.dates}
							tags={project.technologies ? [...project.technologies] : undefined}
							image={project.image}
							video={project.video}
							links={project.links ? [...project.links] : undefined}
							index={id}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
