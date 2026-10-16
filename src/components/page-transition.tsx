"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";

// easeIn cubic-bezier: accelerates into the exit (content pulls away quickly)
// easeOut cubic-bezier: decelerates into view (content settles naturally)
const EASE_IN = [0.4, 0, 1, 1] as const;
const EASE_OUT = [0, 0, 0.2, 1] as const;

const variants = {
	initial: { opacity: 0, filter: "blur(4px)" },
	animate: {
		opacity: 1,
		filter: "blur(0px)",
		transition: {
			// blur clears 100ms before opacity settles: text becomes readable while still fading in
			opacity: { duration: 0.3, ease: EASE_OUT },
			filter: { duration: 0.2, ease: EASE_OUT },
		},
	},
	exit: {
		opacity: 0,
		filter: "blur(3px)",
		transition: {
			// fast easeIn exit: total exit phase 0.15s + enter 0.3s = 0.45s total (was 0.56s)
			duration: 0.15,
			ease: EASE_IN,
		},
	},
};

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
				variants={variants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="min-h-screen"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
