import React from 'react';
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  imageSrc?: string;  
  githubLink: string;
  youtubeLink?: string; 
};

const projects: Project[] = [
  {
    title: 'PetPlanet',
    description: `PetPlanet offers a complete experience for pet lovers, allowing users to search and follow pets, send friend requests, and organize private events for their furry friends.`,
    imageSrc: '/img/petplanet.jpeg', 
    githubLink: 'https://github.com/FrancescoSanti96/pet-planet',
    youtubeLink: 'https://www.youtube.com/watch?v=vM7iD80ckWk&t=3s', 
  },
  {
    title: 'Big Data Analysis Project',
    description: `This project, focuses on analyzing and presenting comparisons between different generations—Parents, Youth, and Children—through various graphs and data.`,
    imageSrc: '/img/analisi.png', 
    githubLink: 'https://github.com/FrancescoSanti96/analisi_evoluzione_della_Societ-_Italiana',
  },
]

export default function ProjectsSection() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center md:text-left">
      Projects
      </h1>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-black text-white rounded-lg border border-gray-400  p-4 flex flex-col">
              {project.imageSrc && (
                <div className="mb-4">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={600} 
                    height={400} 
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
              )}
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                {project.youtubeLink && (
                  <div className="mb-4">
                    <a
                      href={project.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
