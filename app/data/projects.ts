export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
  featured: boolean;
  tags: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "patti",
    title: "Patti",
    category: "Prodotto in sviluppo",
    subtitle: "Organizzazione quotidiana per case condivise.",
    description:
      "Un prodotto mobile per coordinare attività ricorrenti, turni, lista della spesa e spese comuni. Il progetto attraversa discovery, progettazione del dominio, sviluppo full stack e verifica dei flussi reali.",
    imageSrc: "/img/patti/home.png",
    imageAlt: "Home dell'app mobile Patti",
    imageFit: "contain",
    featured: true,
    tags: ["Expo", "React Native", "FastAPI", "Supabase"],
    links: [],
  },
  {
    slug: "petplanet",
    title: "PetPlanet",
    category: "Progetto universitario",
    subtitle: "Una community per persone e animali domestici.",
    description:
      "Una piattaforma dedicata alla gestione degli animali domestici, con profili, relazioni, richieste di amicizia ed eventi privati.",
    imageSrc: "/img/petplanet.jpeg",
    imageAlt: "Interfaccia del progetto PetPlanet",
    imageFit: "cover",
    featured: false,
    tags: ["React", "Node.js", "MongoDB"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/FrancescoSanti96/pet-planet",
      },
      {
        label: "Demo video",
        href: "https://www.youtube.com/watch?v=vM7iD80ckWk&t=3s",
      },
    ],
  },
  {
    slug: "analisi-societa-italiana",
    title: "Analisi evoluzione della società italiana",
    category: "Progetto universitario",
    subtitle: "Dati e generazioni a confronto.",
    description:
      "Un progetto di analisi e visualizzazione dati che confronta generazioni e cambiamenti della società italiana.",
    imageSrc: "/img/analisi.png",
    imageAlt: "Grafici del progetto di analisi della società italiana",
    imageFit: "cover",
    featured: false,
    tags: ["Python", "Analisi dati", "Data visualization"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/FrancescoSanti96/analisi_evoluzione_della_Societ-_Italiana",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const pattiScreens = [
  {
    src: "/img/patti/home.png",
    alt: "Home dell'app Patti",
  },
  {
    src: "/img/patti/activities.png",
    alt: "Attività ricorrenti nell'app Patti",
  },
  {
    src: "/img/patti/shopping.png",
    alt: "Lista della spesa nell'app Patti",
  },
] as const;
