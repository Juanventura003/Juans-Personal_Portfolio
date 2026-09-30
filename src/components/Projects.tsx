import SectionHead from './SectionHead.tsx'
import { profile, projects } from '../data.ts'

export default function Projects() {
  return (
    <section id="projects">
      <SectionHead title="projects" path="~/src" />
      <div className="projects">
        {projects.map((p) => (
          <article className="proj" key={p.slug}>
            <div className="repo">{profile.handle}/{p.slug}</div>
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
            <ul className="highlights">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="proj-foot">
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="links">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
