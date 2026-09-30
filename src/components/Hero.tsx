import { profile } from '../data.ts'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="prompt">
        <span className="u">{profile.handle}@dev</span>:<span className="p">~</span>$ whoami
      </div>
      <h1>
        {profile.name}
        <span className="cursor" aria-hidden="true" />
      </h1>
      <p className="role">
        <strong>{profile.role}.</strong> {profile.tagline}
      </p>
      <div className="cta">
        <a className="btn primary" href="#projects">View projects</a>
        <a className="btn" href="#contact">Get in touch</a>
        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </div>
      <span className="status">
        {profile.status} · {profile.location}
      </span>
    </header>
  )
}
