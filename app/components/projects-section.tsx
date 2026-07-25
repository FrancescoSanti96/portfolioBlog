import Image from 'next/image'

const secondaryProjects = [
  {
    title: 'PetPlanet',
    description:
      'Una piattaforma community dedicata alla gestione degli animali domestici, con profili, relazioni ed eventi.',
    imageSrc: '/img/petplanet.jpeg',
    imageAlt: 'Interfaccia del progetto PetPlanet',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/FrancescoSanti96/pet-planet',
      },
      {
        label: 'Demo video',
        href: 'https://www.youtube.com/watch?v=vM7iD80ckWk&t=3s',
      },
    ],
  },
  {
    title: 'Analisi evoluzione della società italiana',
    description:
      'Un progetto di analisi e visualizzazione dati che confronta generazioni e cambiamenti della società italiana.',
    imageSrc: '/img/analisi.png',
    imageAlt: 'Grafici del progetto di analisi della società italiana',
    links: [
      {
        label: 'Repository',
        href: 'https://github.com/FrancescoSanti96/analisi_evoluzione_della_Societ-_Italiana',
      },
    ],
  },
] as const

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="border-y border-[var(--border)] bg-[var(--surface)] py-20">
        <div className="site-container">
          <p className="eyebrow">Progetto in evidenza</p>
          <div className="mt-3 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end">
            <div>
              <h2
                id="projects-title"
                className="text-4xl font-semibold text-[var(--ink)]"
              >
                Patti
              </h2>
              <p className="mt-3 text-xl font-medium text-[var(--ink)]">
                Organizzazione quotidiana per case condivise.
              </p>
              <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
                Un prodotto mobile per coordinare attività ricorrenti, turni,
                lista della spesa e spese comuni. Il progetto attraversa
                discovery, progettazione del dominio, sviluppo full stack e
                verifica dei flussi reali.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 text-sm">
                <div>
                  <dt className="text-[var(--muted)]">Mobile</dt>
                  <dd className="mt-1 font-medium text-[var(--ink)]">
                    Expo e React Native
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--muted)]">Backend</dt>
                  <dd className="mt-1 font-medium text-[var(--ink)]">
                    FastAPI e Python
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--muted)]">Dati e Auth</dt>
                  <dd className="mt-1 font-medium text-[var(--ink)]">
                    Supabase e PostgreSQL
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--muted)]">Dominio</dt>
                  <dd className="mt-1 font-medium text-[var(--ink)]">
                    RRULE e rotazioni
                  </dd>
                </div>
              </dl>
              <p className="mt-8 text-sm font-medium text-[var(--accent)]">
                Case study completo in preparazione
              </p>
            </div>

            <div
              className="flex snap-x gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0"
              aria-label="Schermate di Patti"
            >
              {['home', 'activities', 'shopping'].map((screen) => (
                <div
                  key={screen}
                  className="min-w-[220px] flex-1 snap-start overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm lg:min-w-0"
                >
                  <Image
                    src={`/img/patti/${screen}.png`}
                    alt={`Schermata ${screen} dell'app Patti`}
                    width={640}
                    height={1280}
                    className="h-auto w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="site-container py-20">
        <p className="eyebrow">Altri lavori</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]"
            >
              <div className="aspect-[16/9] overflow-hidden border-b border-[var(--border)] bg-white">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  width={800}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--ink)]">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-5">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
