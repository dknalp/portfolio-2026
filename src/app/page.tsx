import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import SocialSection from "@/components/section/social-section";

export default function Page() {
	return (
		<main className="min-h-screen bg-transparent text-[#fafafa]">
			<div className="mx-auto w-full max-w-2xl px-4 space-y-20 py-20">
				{/* Hero */}
				<section id="hero">
					<div className="flex flex-col gap-4">
						<div className="flex flex-row items-center gap-4 md:gap-6">
							<div className="shrink-0">
								<Avatar className="size-24 md:size-32 rounded-full border-2 border-zinc-700">
									<AvatarImage alt={DATA.name} src="/avatar.jpg" />
									<AvatarFallback>{DATA.name.charAt(0)}</AvatarFallback>
								</Avatar>
							</div>
							<div className="flex flex-col gap-1 min-w-0">
								<h1 className="text-4xl md:text-5xl font-semibold text-white">{DATA.name}</h1>
								<p className="text-base md:text-lg font-medium text-zinc-400">Software Engineer</p>
								<p className="hidden md:block text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">{DATA.description}</p>
							</div>
						</div>
						<p className="md:hidden text-sm text-zinc-400 leading-relaxed">{DATA.description}</p>
					</div>
				</section>

				{/* Projects */}
				<section id="projects">
					<ProjectsSection />
				</section>

				{/* Social Links */}
				<section id="social">
					<SocialSection />
				</section>

				{/* Contact */}
				<section id="contact">
					<ContactSection />
				</section>
			</div>
		</main>
	);
}
