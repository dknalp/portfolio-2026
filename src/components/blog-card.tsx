import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  summary: string;
  date: string;
  href: string;
  }

export function BlogCard({ title, summary, date, href }: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-row items-stretch overflow-hidden rounded-xl bg-zinc-800/30 border-2 border-transparent hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
    >
      <div className="flex flex-col flex-1 min-w-0 justify-center px-4 py-3 gap-1">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="text-base font-semibold text-white truncate">
            {title}
            <ChevronRight
              className="ml-1 inline-block size-3.5 text-zinc-500 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-purple-400"
              aria-hidden
            />
          </h2>
          <time className="shrink-0 text-xs text-zinc-500">{date}</time>
        </div>
        {summary ? (
          <p className="text-sm text-zinc-400 line-clamp-1 leading-relaxed">
            {summary}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
