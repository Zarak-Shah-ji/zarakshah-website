import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things Zarak Shah has built.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <h1 className="mb-2 text-2xl font-medium">Projects</h1>
      <p className="mb-10 text-lg text-muted">
        A short list. Most live on{" "}
        <a
          href="https://github.com/Zarak-Shah-ji"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-rule"
        >
          GitHub
        </a>
        .
      </p>

      <ul className="grid gap-6">
        {projects.map((project) => (
          <li
            key={project.name}
            data-show={project.mode === "both" ? undefined : project.mode}
          >
            <Divider />
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block pt-4"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-mono text-lg">{project.name}</h2>
                <span className="text-sm uppercase tracking-wide text-muted">
                  {project.mode === "life" ? "life" : "work"}
                </span>
              </div>
              <p className="mt-1 text-lg text-muted">{project.blurb}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
