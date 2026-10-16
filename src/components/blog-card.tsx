import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const GRADIENTS = [
  "from-purple-900/40 to-zinc-900",
  "from-blue-900/40 to-zinc-900",
  "from-emerald-900/40 to-zinc-900",
  "from-rose-900/40 to-zinc-900",
];

interface BlogCardProps {
  title: string;
  summary: string;
  date: string;
  href: string;
  image?: string;
  index?: number;
}

export function BlogCard({
  title,
  summary,
  date,
  href,
  image,
  index = 0,
}: BlogCardProps) {
  const gradient = GRADIENTS[index % GRADIENTS.length];
  const hasImage = !!(image && image.length > 0);

  return (
    <Link
      href={href}
      className="group flex flex-row items-stretch overflow-hidden rounded-xl bg-zinc-800/30 border-2 border-transparent hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
    >
      <div
        className="relative shrink-0 w-24 sm:w-28 self-stretch [mask-image:linear-gradient(to_right,black,transparent)] [-webkit-mask-image:linear-gradient(to_right,black,transparent)]"
      >
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br flex items-center justify-center",
              gradient
            )}
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-700/50 ring-1 ring-white/10 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 min-w-0 justify-center px-4 py-3 gap-1">
        <h2 className="text-sm font-semibold text-white truncate">
          {title}
          <ChevronRight
            className="ml-1 inline-block size-3.5 text-zinc-500 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-purple-400"
            aria-hidden
          />
        </h2>
        <time className="text-xs text-zinc-500">{date}</time>
        {summary ? (
          <p className="text-xs text-zinc-400 line-clamp-1 leading-relaxed">
            {summary}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
