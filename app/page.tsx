import { BlogPosts } from "app/components/posts";
import Image from "next/image";
import CurrentTimelineExp from "./components/currentTimeLineExp";
import StudyTimelineExp from "./components/currentTimeLineStudy";
import ProjectsSection from "./components/projectsSection";

export default function Page() {
  return (
    <section>
      {/* Titolo centrato su mobile e allineato a sinistra su desktop */}
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center md:text-left">
        My Portfolio
      </h1>

      {/* Colonna su mobile, riga su desktop */}
      <div className="flex flex-col md:flex-row mb-4 items-center gap-4">
        {/* Imposta la larghezza ridotta su mobile e dimensione originale su desktop */}
        <div className="w-32 h-32 md:w-auto md:h-auto mx-auto mb-6 md:mb-0"> {/* Aggiunto margine inferiore per mobile */}
          <Image
            src={`/img/me2.jpg`}
            alt="My Profile Picture"
            width={400}
            height={400}
            className="rounded filter grayscale hover:filter-none transition duration-500 ease-in-out"
          />
        </div>

        <div className="text-center md:text-left">
          <p>{`Hello everyone 👋🏻, I'm Francesco Santi 🦸🏻‍♂️`}</p>

          <p>
            {`A Software Developer at Claranet Italy.`}
          </p><br />

          <p>
            {`Welcome to my portfolio, where you'll find my resume and blog.`}
          </p><br />

          <p>{`I hope you enjoy exploring my work and insights! 🚀`}</p>
        </div>
      </div>

      <CurrentTimelineExp />
      <StudyTimelineExp />
      <ProjectsSection/>

      {/* Sezione Blog Posts */}
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
