import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things Zarak Shah has built.",
};

export default function ProjectsPage() {
  return (
    <div className="py-10">
      <h1 className="reveal mb-2 text-xl font-medium">Projects</h1>
      <p
        className="reveal mb-10 text-base text-muted"
        style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
      >
        A short list. Most live on{" "}
        <a
          href="https://github.com/Zarak-Shah-ji"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-rule transition-colors duration-300 hover:text-accent hover:decoration-accent"
        >
          GitHub
        </a>
        .
      </p>

      <ul className="stagger grid gap-6">
        {projects.map((project) => (
          <li
            key={project.name}
            data-show={project.mode === "both" ? undefined : project.mode}
            className="row"
          >
            <Divider />
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="row-link group block pt-4"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="row-title font-mono text-base">
                  {project.name}
                  <span className="row-arrow ml-2 text-sm">&#8599;</span>
                </h2>
                <span className="shrink-0 text-xs uppercase tracking-wide text-muted">
                  {project.mode === "life" ? "life" : "work"}
                </span>
              </div>
              <p className="mt-1 text-base text-muted">{project.blurb}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
