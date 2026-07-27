export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  group: "professional" | "side-project" | "university";
  title: string;
  category: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  featured: boolean;
  tags: string[];
  links: ProjectLink[];
  highlights?: {
    label: string;
    title: string;
    description: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "datapizza-products",
    group: "professional",
    title: "Prodotti digitali Datapizza",
    category: "Datapizza · 2025 - Oggi",
    subtitle: "Tecnologia per aziende, talenti e community tech.",
    description:
      "Contribuisco allo sviluppo end-to-end dei prodotti digitali dell'ecosistema Datapizza, lavorando tra frontend, servizi backend e integrazione di funzionalità AI.",
    featured: false,
    tags: ["React", "Next.js", "TypeScript", "Python", "Django", "AWS"],
    links: [
      {
        label: "Datapizza",
        href: "https://datapizza.tech/it/",
      },
      {
        label: "Datapizza Jobs",
        href: "https://jobs.datapizza.tech/?page=1",
      },
    ],
    highlights: [
      {
        label: "Ecosistema",
        title: "Corporate e piattaforma Jobs",
        description:
          "Prodotti pubblici rivolti ad aziende, talenti e alla community Tech & AI.",
      },
      {
        label: "Contributo",
        title: "Sviluppo full stack end-to-end",
        description:
          "Interfacce React e Next.js, servizi Python e Django e collaborazione sui flussi dati.",
      },
      {
        label: "Prodotto",
        title: "Iterazione in un contesto startup",
        description:
          "Sviluppo, qualità del codice, deploy e monitoraggio fanno parte dello stesso ciclo di consegna.",
      },
    ],
  },
  {
    slug: "claranet-enterprise-products",
    group: "professional",
    title: "Prodotti enterprise in consulenza",
    category: "Claranet Italia / Flowing · 2022 - 2024",
    subtitle: "Software per sanità, banking e visualizzazione dati.",
    description:
      "Ho contribuito a prodotti sviluppati per clienti enterprise, collaborando con team multidisciplinari e mantenendo anonimi clienti e informazioni riservate.",
    featured: false,
    tags: [
      "React",
      "TypeScript",
      "Angular",
      "React Query",
      "Zod",
      "Highcharts",
    ],
    links: [],
    highlights: [
      {
        label: "Sanità",
        title: "Piattaforma per professionisti e pazienti",
        description:
          "Sviluppo di interfacce React e TypeScript con form, validazione e gestione dei dati remoti.",
      },
      {
        label: "Banking",
        title: "Applicazioni web evolute nel tempo",
        description:
          "Sviluppo e manutenzione di applicazioni AngularJS e Angular in un dominio regolamentato.",
      },
      {
        label: "Dati",
        title: "Report e visualizzazioni operative",
        description:
          "Realizzazione di report JavaScript e Highcharts per rendere leggibili dati complessi.",
      },
    ],
  },
  {
    slug: "patti",
    group: "side-project",
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
    highlights: [
      {
        label: "Problema",
        title: "La convivenza non segue un foglio Excel",
        description:
          "Attività, turni e spese cambiano nel tempo. Patti prova a trasformare accordi informali in flussi semplici e condivisi.",
      },
      {
        label: "Prodotto",
        title: "Un unico spazio per la vita di casa",
        description:
          "Attività ricorrenti, rotazioni, lista della spesa e finanze convivono senza costringere le persone a usare strumenti diversi.",
      },
      {
        label: "Contributo",
        title: "Progettazione e sviluppo end-to-end",
        description:
          "Discovery, UX, applicazione mobile, API, autenticazione e modello dati sono stati affrontati come parti dello stesso prodotto.",
      },
    ],
  },
  {
    slug: "dog-identifier",
    group: "university",
    title: "Dog Breed Identifier",
    category: "Progetto universitario individuale",
    subtitle: "Classificazione di 121 razze e riconoscimento personale.",
    description:
      "Progetto AI individuale dedicato alla classificazione di immagini canine. Il sistema riconosce la razza e, quando individua un Australian Shepherd, può attivare un secondo modello per verificare se il cane è Maggie.",
    featured: false,
    tags: ["Python", "PyTorch", "Computer vision", "ResNet18"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/FrancescoSanti96/dogIdentifier",
      },
    ],
    highlights: [
      {
        label: "Obiettivo",
        title: "Una classificazione in due passaggi",
        description:
          "Il primo modello distingue fino a 121 razze; il secondo affronta il caso binario Maggie rispetto agli altri cani.",
      },
      {
        label: "Esperimento",
        title: "CNN da zero e transfer learning a confronto",
        description:
          "Architetture personalizzate sono state confrontate con ResNet18 misurando accuratezza, complessità e tempi di addestramento.",
      },
      {
        label: "Pipeline",
        title: "Dai dati alla valutazione",
        description:
          "Preparazione del dataset, checkpoint, TensorBoard, metriche, matrici di confusione e predizione rendono il processo riproducibile.",
      },
    ],
  },
  {
    slug: "petplanet",
    group: "university",
    title: "PetPlanet",
    category: "Progetto universitario",
    subtitle: "Una community per persone e animali domestici.",
    description:
      "Progetto sviluppato in un team di due persone. Ho seguito la gestione del lavoro dall'ideazione alla seconda versione, contribuendo sia al frontend sia al backend.",
    imageSrc: "/img/petplanet.jpeg",
    imageAlt: "Interfaccia del progetto PetPlanet",
    imageFit: "cover",
    featured: false,
    tags: ["Angular", "Fastify", "MongoDB"],
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
    highlights: [
      {
        label: "Team",
        title: "Sviluppato in due persone",
        description:
          "User story, wireframe, sviluppo e revisione del prodotto sono stati gestiti insieme.",
      },
      {
        label: "Iterazione",
        title: "Una seconda versione dopo gli errori iniziali",
        description:
          "La prima soluzione è stata analizzata e riprogettata per migliorare backend ed esperienza utente.",
      },
      {
        label: "Sviluppo",
        title: "Una piattaforma full stack",
        description:
          "Angular, Fastify, autenticazione OAuth e MongoDB hanno formato un unico sistema.",
      },
    ],
  },
  {
    slug: "fiber",
    group: "university",
    title: "FIBER",
    category: "Progetto universitario",
    subtitle: "Bollettini agricoli rilevanti per territorio e colture.",
    description:
      "Progetto full stack sviluppato in un team di due persone. La piattaforma collega tecnici e agricoltori: i primi creano e pubblicano bollettini, i secondi ricevono contenuti filtrati in base alle proprie colture e zone di interesse.",
    featured: false,
    tags: ["ASP.NET Core", "Entity Framework", "SQLite", "Razor"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/FrancescoSanti96/FIBER",
      },
    ],
    highlights: [
      {
        label: "Team",
        title: "Sviluppato in due persone",
        description:
          "Progettazione dei flussi, sviluppo e integrazione delle funzionalità sono stati affrontati in collaborazione.",
      },
      {
        label: "Prodotto",
        title: "Due esperienze per tecnici e agricoltori",
        description:
          "I tecnici gestiscono bozze e pubblicazione dei bollettini; gli agricoltori configurano province e colture per ricevere contenuti rilevanti.",
      },
      {
        label: "Sviluppo",
        title: "Un'applicazione web full stack in .NET",
        description:
          "ASP.NET Core MVC, Razor, Entity Framework, SQLite ed esportazione PDF compongono il sistema.",
      },
    ],
  },
  {
    slug: "analisi-societa-italiana",
    group: "university",
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
    highlights: [
      {
        label: "Ricerca",
        title: "Domande tradotte in dati",
        description:
          "Indicatori demografici e sociali sono stati selezionati per osservare il cambiamento tra generazioni.",
      },
      {
        label: "Analisi",
        title: "Confronti leggibili e verificabili",
        description:
          "Pulizia, aggregazione e confronto dei dataset hanno costruito la base dell'interpretazione.",
      },
      {
        label: "Comunicazione",
        title: "Visualizzazioni al servizio del racconto",
        description:
          "Grafici e sintesi rendono accessibili pattern che sarebbero difficili da cogliere nei dati grezzi.",
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
