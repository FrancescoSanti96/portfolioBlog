import type { Metadata } from "next";
import Image from "next/image";
import type { Project } from "app/data/projects";
import { pattiScreens, projects } from "app/data/projects";

export const metadata: Metadata = {
  title: "Progetti",
  description:
    "Prodotti, progetti universitari ed esperimenti sviluppati da Francesco Santi.",
  alternates: {
    canonical: "/projects",
  },
};

const professionalProjects = projects.filter(
  (project) => project.group === "professional",
);
const sideProjects = projects.filter(
  (project) => project.group === "side-project",
);
const universityProjects = projects.filter(
  (project) => project.group === "university",
);

function DetailedProject({
  project,
  showScreens = false,
}: {
  project: Project;
  showScreens?: boolean;
}) {
  return (
    <article className="py-8 sm:py-10">
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] md:gap-10 lg:gap-16">
        <header>
          <p className="text-sm font-medium text-[var(--section-accent)]">
            {project.category}
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-[var(--ink)]">
            {project.title}
          </h3>
          <p className="mt-3 text-xl font-medium leading-8 text-[var(--ink)]">
            {project.subtitle}
          </p>
          <p className="mt-4 leading-7 text-[var(--muted)]">
            {project.description}
          </p>
          <ul
            className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-[var(--muted)]"
            aria-label={`Tecnologie di ${project.title}`}
          >
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-5">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--section-accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </header>

        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {(project.highlights ?? []).map((highlight, index) => (
            <div
              key={highlight.label}
              className="grid gap-3 py-5 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:gap-4"
            >
              <p
                aria-hidden="true"
                className="text-sm font-semibold text-[var(--section-accent)]"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <p className="text-xs font-semibold uppercase text-[var(--section-accent)]">
                  {highlight.label}
                </p>
                <h4 className="mt-1 text-lg font-semibold text-[var(--ink)]">
                  {highlight.title}
                </h4>
                <p className="mt-2 leading-7 text-[var(--muted)]">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showScreens && (
        <div
          className="mt-10 flex snap-x gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
          aria-label="Schermate di Patti"
        >
          {pattiScreens.map((screen) => (
            <div
              key={screen.src}
              className="min-w-[220px] snap-start overflow-hidden rounded-lg border border-[var(--border)] bg-white md:min-w-0"
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                width={640}
                height={1280}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div>
      <section
        className="border-y border-[var(--border)] bg-[var(--surface)] py-14 [--section-accent:#28689d] dark:[--section-accent:#82bce7] sm:py-16"
        aria-labelledby="professional-projects-title"
      >
        <div className="site-container">
          <p className="text-xs font-bold uppercase text-[var(--section-accent)]">
            01 · Lavoro professionale
          </p>
          <h1
            id="professional-projects-title"
            className="mt-2 max-w-3xl text-3xl font-semibold text-[var(--ink)]"
          >
            Prodotti reali a cui ho contribuito in team
          </h1>
          <div className="mt-7 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {professionalProjects.map((project) => (
              <DetailedProject key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-14 [--section-accent:#087f70] dark:[--section-accent:#5eead4] sm:py-16"
        aria-labelledby="side-projects-title"
      >
        <div className="site-container">
          <p className="text-xs font-bold uppercase text-[var(--section-accent)]">
            02 · Side quests
          </p>
          <h2
            id="side-projects-title"
            className="mt-2 max-w-3xl text-3xl font-semibold text-[var(--ink)]"
          >
            Prodotti che provo a portare nel mondo reale
          </h2>
          <div className="mt-7 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {sideProjects.map((project) => (
              <DetailedProject
                key={project.slug}
                project={project}
                showScreens={project.slug === "patti"}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-y border-[var(--border)] bg-[var(--surface)] py-14 [--section-accent:#b45309] dark:[--section-accent:#fbbf24] sm:py-16"
        aria-labelledby="university-projects-title"
      >
        <div className="site-container">
          <p className="text-xs font-bold uppercase text-[var(--section-accent)]">
            03 · Training arc
          </p>
          <h2
            id="university-projects-title"
            className="mt-2 max-w-3xl text-3xl font-semibold text-[var(--ink)]"
          >
            Progetti che mi hanno formato
          </h2>

          <div className="mt-8 grid gap-y-8 md:grid-cols-2">
            {universityProjects.map((project, index) => (
              <article
                key={project.slug}
                className={`border-t border-[var(--border)] pt-6 ${
                  index % 2 === 0
                    ? "md:pr-8 lg:pr-10"
                    : "md:border-l md:pl-8 lg:pl-10"
                }`}
              >
                <p className="text-sm font-medium text-[var(--section-accent)]">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--ink)]">
                  {project.title}
                </h3>
                <p className="mt-2 font-medium text-[var(--ink)]">
                  {project.subtitle}
                </p>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                <dl className="mt-6 space-y-4">
                  {(project.highlights ?? []).slice(0, 2).map((highlight) => (
                    <div key={highlight.label}>
                      <dt className="text-xs font-semibold uppercase text-[var(--section-accent)]">
                        {highlight.label}
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-[var(--muted)]">
                        <span className="font-semibold text-[var(--ink)]">
                          {highlight.title}.
                        </span>{" "}
                        {highlight.description}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul
                  className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-[var(--muted)]"
                  aria-label={`Tecnologie di ${project.title}`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-5">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--section-accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
