import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "app/data/projects";

export const metadata: Metadata = {
  title: "Progetti",
  description:
    "Prodotti, progetti universitari ed esperimenti sviluppati da Francesco Santi.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <section className="site-container py-16 sm:py-20">
      <p className="eyebrow">Archivio</p>
      <h1 className="mt-2 text-4xl font-semibold text-[var(--ink)]">
        Progetti
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
        Prodotti in sviluppo, progetti universitari ed esperimenti attraverso
        cui esploro problemi, tecnologie e modi diversi di costruire software.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]"
          >
            <div className="aspect-[16/9] overflow-hidden border-b border-[var(--border)] bg-white">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                width={1200}
                height={675}
                className={`h-full w-full ${
                  project.imageFit === "contain"
                    ? "object-contain p-4"
                    : "object-cover"
                }`}
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-medium text-[var(--accent)]">
                {project.category}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--ink)]">
                {project.title}
              </h2>
              <p className="mt-2 font-medium text-[var(--ink)]">
                {project.subtitle}
              </p>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {project.description}
              </p>
              <ul
                className="mt-5 flex flex-wrap gap-2"
                aria-label={`Tecnologie di ${project.title}`}
              >
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {project.links.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-5">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="mt-6 text-sm text-[var(--muted)]">
                  Approfondimento in preparazione
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
