import SectionHead from './SectionHead.tsx'
import { skills } from '../data.ts'

export default function Skills() {
  return (
    <section id="stack">
      <SectionHead title="stack" path="" />
      <div className="skills">
        {skills.map((g) => (
          <div key={g.title}>
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
