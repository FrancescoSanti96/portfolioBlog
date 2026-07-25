import Image from "next/image";
import Link from "next/link";
import { BlogPosts } from "app/components/posts";
import { EducationSection } from "./components/education-section";
import { ExperienceSection } from "./components/experience-section";
import { ProjectsSection } from "./components/projects-section";
import { profile } from "./data/profile";

export default function Page() {
  return (
    <>
      <section className="hero relative isolate flex items-end overflow-hidden bg-neutral-900">
        <Image
          src="/img/me2.jpg"
          alt={`Ritratto di ${profile.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] sm:origin-left sm:scale-110"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
        <div className="site-container relative z-10 pb-14 pt-36 text-white sm:pb-20">
          <p className="text-sm font-semibold uppercase text-sky-200">
            {profile.role}
          </p>
          <h1 className="mt-3 max-w-3xl text-5xl font-semibold sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-100">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-neutral-950 transition hover:bg-sky-100"
            >
              Scopri i progetti
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-white/60 px-5 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Scrivimi
            </a>
          </div>
        </div>
      </section>

      <ProjectsSection />

      <div className="site-container">
        <ExperienceSection />
        <EducationSection />
        <section className="py-16" aria-labelledby="writing-title">
          <p className="eyebrow">Appunti e approfondimenti</p>
          <h2
            id="writing-title"
            className="mb-8 mt-2 text-3xl font-semibold text-[var(--ink)]"
          >
            Dal blog
          </h2>
          <BlogPosts showHeading={false} limit={5} />
          <Link
            href="/blog"
            className="mt-8 inline-block font-medium text-[var(--accent)] underline decoration-transparent underline-offset-4 transition hover:decoration-current"
          >
            Tutti gli articoli
          </Link>
        </section>
      </div>
    </>
  );
}
