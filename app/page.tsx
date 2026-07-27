import Image from "next/image";
import Link from "next/link";
import { BlogPosts } from "app/components/posts";
import { EducationSection } from "./components/education-section";
import { ExperienceSection } from "./components/experience-section";
import { FeaturedProjectsSection } from "./components/projects-section";
import { profile } from "./data/profile";

export default function Page() {
  return (
    <>
      <section className="hero group relative isolate flex items-end overflow-hidden bg-neutral-900">
        <Image
          src="/img/profile/francesco-hero.jpg"
          alt={`Ritratto di ${profile.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_35%] grayscale transition duration-700 ease-out group-active:grayscale-0 group-focus-within:grayscale-0 group-hover:grayscale-0 motion-reduce:transition-none sm:object-[center_38%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/65" />
        <div className="site-container relative z-10 pb-12 pt-28 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] sm:pb-16 sm:pt-36">
          <p className="max-w-2xl text-base font-semibold uppercase text-white">
            {profile.role}
          </p>
          <h1 className="mt-3 max-w-4xl text-6xl font-semibold sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-white sm:text-2xl sm:leading-9">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-neutral-950 transition hover:bg-sky-100"
            >
              Scopri i progetti
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-white/60 px-5 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Leggi il blog
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProjectsSection />

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
