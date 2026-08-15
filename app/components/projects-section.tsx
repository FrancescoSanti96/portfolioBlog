import Image from "next/image";
import Link from "next/link";
import { featuredProjects, pattiScreens } from "app/data/projects";

export function FeaturedProjectsSection() {
  const project = featuredProjects[0];

  if (!project) {
    return null;
  }

  return (
    <section
      id="featured-projects"
      aria-labelledby="featured-projects-title"
      className="border-y border-[var(--border)] bg-[var(--surface)] py-20"
    >
      <div className="site-container">
        <p className="eyebrow">Progetti in evidenza</p>
        <div className="mt-3 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
          <div>
            <h2
              id="featured-projects-title"
              className="text-4xl font-semibold text-[var(--ink)]"
            >
              {project.title}
            </h2>
            <p className="mt-3 text-xl font-medium text-[var(--ink)]">
              {project.subtitle}
            </p>
            <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
              {project.description}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tecnologie">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--muted)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/projects"
                className="font-medium text-[var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
              >
                Esplora tutti i progetti
              </Link>
              <p className="text-sm text-[var(--muted)]">
                Case study completo in preparazione
              </p>
            </div>
          </div>

          <div
            className="flex snap-x gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
            aria-label="Schermate di Patti"
          >
            {pattiScreens.map((screen) => (
              <div
                key={screen.src}
                className="min-w-[220px] flex-1 snap-start overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm lg:min-w-0"
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
        </div>
      </div>
    </section>
  );
}
