import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import { ExperienceSection } from "./components/experience-section";
import { EducationSection } from "./components/education-section";
import ProjectsSection from "./components/projectsSection";
import { profile } from "./data/profile";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center md:text-left">
        {profile.name}
      </h1>

      <div className="flex flex-col md:flex-row mb-4 items-center gap-4">
        <div className="w-32 h-32 md:w-auto md:h-auto mx-auto mb-6 md:mb-0">
          <Image
            src={`/img/me2.jpg`}
            alt={`Ritratto di ${profile.name}`}
            width={400}
            height={400}
            className="rounded filter grayscale hover:filter-none transition duration-500 ease-in-out"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="font-semibold">{profile.role}</p>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400">
            Attualmente in {profile.currentCompany}.
          </p>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            {profile.summary}
          </p>
        </div>
      </div>

      <ExperienceSection />
      <EducationSection />
      <ProjectsSection/>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
