"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageTransition({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const reduce = useReducedMotion();

	if (reduce) return <>{children}</>;

	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				key={pathname}
				initial={{ opacity: 0, filter: "blur(6px)" }}
				animate={{ opacity: 1, filter: "blur(0px)" }}
				exit={{ opacity: 0, filter: "blur(6px)" }}
				transition={{ duration: 0.28, ease: "easeOut" }}
				className="min-h-screen"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
