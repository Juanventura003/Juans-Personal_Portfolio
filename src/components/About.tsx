import SectionHead from './SectionHead.tsx'
import { about, facts } from '../data.ts'

export default function About() {
  const width = Math.max(...facts.map(([k]) => k.length))

  return (
    <section id="about">
      <SectionHead title="about" path="README.md" />
      <div className="about">
        <div>
          {about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      
      </div>
    </section>
  )
}
