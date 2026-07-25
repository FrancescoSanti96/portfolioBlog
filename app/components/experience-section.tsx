import { experiences } from 'app/data/profile'
import { Timeline } from './timeline'

export function ExperienceSection() {
  return (
    <section className="py-12" aria-labelledby="experience-title">
      <h2 id="experience-title" className="mb-8 text-2xl font-semibold">
        Esperienza
      </h2>
      <Timeline items={experiences} accentClassName="bg-sky-600" />
    </section>
  )
}
