import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const socials = [
  {
    name: "GitHub",
    handle: "@dknalp",
    href: "https://github.com/dknalp",
    icon: FaGithub,
  },
  {
    name: "Instagram",
    handle: "@dknalp",
    href: "https://www.instagram.com/dknalp/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    handle: "@doğukan-turgut",
    href: "https://www.linkedin.com/in/do%C4%9Fukan-turgut",
    icon: FaLinkedin,
  },
];

export function SocialSection() {
  return (
    <section aria-labelledby="social-heading" className="w-full">
      <h2 id="social-heading" className="text-3xl font-semibold text-white/90">
        Find me online
      </h2>
      <p className="text-sm text-zinc-400 mb-4">Places where you can find me online</p>
      <ul className="grid grid-cols-2 gap-3" role="list">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <li key={social.name}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center justify-between p-4 rounded-xl bg-zinc-800/50 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-zinc-700/50 hover:ring-purple-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 group"
                aria-label={`${social.name} — ${social.handle}`}
              >
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-white leading-tight truncate">{social.name}</span>
                  <span className="text-sm text-zinc-400 mt-0.5 truncate">{social.handle}</span>
                </div>
                <div className="ml-3 shrink-0 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-6 h-6 text-zinc-400" aria-hidden="true" />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SocialSection;
