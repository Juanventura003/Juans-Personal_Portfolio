import SectionHead from './SectionHead.tsx'
import { experience } from '../data.ts'

export default function Experience() {
  return (
    <section id="experience">
      <SectionHead title="experience" path="" />
      <ol className="log">
        {experience.map((r) => (
          <li key={r.hash} className={r.current ? 'current' : undefined}>
            <span className="dot" />
            <div>
              <div className="meta">
                <span className="hash">{r.hash}</span>
                {r.current && <span className="branch">HEAD → main</span>}
                <span>{r.dates}</span>
              </div>
              <h3>
                {r.title} <span>@ {r.org}</span>
              </h3>
              {r.points.length === 1 ? (
                <p>{r.points[0]}</p>
              ) : (
                <ul>
                  {r.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
