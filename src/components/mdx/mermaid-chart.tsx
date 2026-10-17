"use client";

import mermaid from "mermaid";
import { useEffect, useId, useRef } from "react";

mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    darkMode: true,
    themeVariables: {
        background: "#09090b",
        primaryColor: "#3f3f46",
        primaryTextColor: "#e4e4e7",
        primaryBorderColor: "#52525b",
        lineColor: "#a1a1aa",
        secondaryColor: "#27272a",
        tertiaryColor: "#18181b",
    },
});

export function MermaidChart({ chart }: { chart: string }) {
    const id = useId().replace(/:/g, "");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mermaid
            .render(`mermaid-${id}`, chart)
            .then(({ svg }) => {
                if (ref.current) ref.current.innerHTML = svg;
            })
            .catch(console.error);
    }, [chart, id]);

    return (
        <div
            ref={ref}
            className="my-6 flex justify-center overflow-x-auto rounded-xl bg-zinc-900/50 p-4 ring-1 ring-white/10"
        />
    );
}
