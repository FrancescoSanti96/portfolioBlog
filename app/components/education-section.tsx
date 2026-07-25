import { education } from 'app/data/profile'
import { Timeline } from './timeline'

export function EducationSection() {
  return (
    <section className="py-12" aria-labelledby="education-title">
      <h2 id="education-title" className="mb-8 text-2xl font-semibold">
        Formazione
      </h2>
      <Timeline items={education} accentClassName="bg-emerald-600" />
    </section>
  )
}
