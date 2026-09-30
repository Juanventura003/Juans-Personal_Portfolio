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
        <pre className="facts" aria-label="Quick facts">
          <span className="c">// quick facts</span>
          {facts.map(([k, v]) => (
            <span key={k}>
              {'\n'}
              <span className="k">{k}</span>:{' '.repeat(width - k.length + 1)}
              <span className="s">"{v}"</span>
            </span>
          ))}
        </pre>
      </div>
    </section>
  )
}
