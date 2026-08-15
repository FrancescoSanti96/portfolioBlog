export const profile = {
  name: "Francesco Santi",
  role: "Software Engineer e Full Stack Developer",
  currentCompany: "Datapizza",
  summary:
    "Software Engineer e Full Stack Developer con esperienza in startup, consulenza, prodotti enterprise e contesti tecnici. Progetto e sviluppo prodotti digitali end-to-end, dal prototipo alla produzione.",
  email: "francescosanti123@gmail.com",
  links: {
    github: "https://github.com/FrancescoSanti96",
    linkedin: "https://www.linkedin.com/in/francesco-santi-552121115",
  },
} as const;

export type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experiences: TimelineItem[] = [
  {
    title: "Software Engineer | Full Stack Developer",
    organization: "Datapizza",
    period: "01/2025 - Oggi",
    summary:
      "Sviluppo end-to-end dei prodotti dell'ecosistema e della community tech della startup.",
    highlights: [
      "Frontend con React, Next.js, TypeScript, Tailwind CSS e shadcn/ui.",
      "Backend e flussi dati con Python e Django.",
      "Integrazione di funzionalità AI nei prodotti.",
      "Collaborazione Agile, versionamento GitLab e attività di deploy e monitoraggio su AWS.",
    ],
  },
  {
    title: "Software Engineer",
    organization: "Claranet Italia / Flowing",
    period: "09/2022 - 12/2024",
    summary:
      "Consulenza e sviluppo software per prodotti nei settori bancario e sanitario, iniziando il percorso in Flowing prima dell'integrazione in Claranet.",
    highlights: [
      "Applicazioni React e TypeScript con Zod, React Query e React Hook Form.",
      "Sviluppo e manutenzione di applicazioni AngularJS e Angular.",
      "Reportistica e visualizzazione dati con JavaScript e Highcharts.",
      "Consegne iterative e collaborazione con team multidisciplinari in Agile.",
    ],
  },
  {
    title: "Junior Frontend Developer · Internship",
    organization: "DMA",
    period: "04/2022 - 07/2022",
    summary:
      "Sviluppo frontend durante il percorso ITS, lavorando su applicazioni web, integrazioni HubSpot ed e-commerce.",
    highlights: [
      "Web app React e Redux Toolkit per gestione punti, scansione QR e premi.",
      "Sviluppo con TypeScript, JavaScript, Hugo, Bootstrap e Tailwind CSS.",
    ],
  },
  {
    title: "Junior Software Developer · Internship",
    organization: "Inception",
    period: "05/2021 - 08/2021",
    summary:
      "Sviluppo di una piattaforma per la gestione di siti digitalizzati tramite rilievi BIM e approccio semantico.",
    highlights: [
      "Frontend Angular e Bootstrap.",
      "Backend .NET 5 e modellazione dati con tecnologie Semantic Web.",
    ],
  },
  {
    title: "IT Specialist",
    organization: "Tosti",
    period: "2016 - 2020",
    summary:
      "Gestione dell'infrastruttura informatica aziendale, supporto interno e automazione delle attività operative.",
    highlights: [
      "Installazione, manutenzione e protezione dei sistemi informatici.",
      "Supporto hardware e software, reti e configurazioni aziendali.",
      "Automazioni Bash, procedure e documentazione tecnica.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    title: "Laurea in Tecnologie dei Sistemi Informatici",
    organization: "Università di Bologna",
    period: "2022 - 2025",
    summary:
      "Percorso universitario focalizzato su ingegneria del software, algoritmi, sistemi e intelligenza artificiale.",
    highlights: [],
  },
  {
    title: "Tecnico Superiore per lo sviluppo software Web e Cloud",
    organization: "ITS Turing - Fondazione FITSTIC",
    period: "2020 - 2022",
    summary:
      "Diploma tecnico superiore conseguito con valutazione 100/100 e lode.",
    highlights: [
      "Sviluppo frontend e backend, database relazionali e NoSQL.",
      "Cloud, cybersecurity, analisi dati e metodologie Agile.",
    ],
  },
];
