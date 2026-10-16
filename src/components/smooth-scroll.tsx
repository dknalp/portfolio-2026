"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.15,
				duration: 0.6,
				smoothWheel: true,
				wheelMultiplier: 1,
				touchMultiplier: 1.2,
			}}
		/>
	);
}
