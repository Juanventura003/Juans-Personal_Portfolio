import { profile } from '../data.ts'

const LINKS = ['about', 'projects', 'experience', 'contact']

export default function Nav({ active }: { active: string }) {
  return (
    <nav className="top" aria-label="Main">
      <a className="brand" href="#top">
        ~/<b>{profile.handle}</b>
      </a>
      <ul>
        {LINKS.map((id) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
              {id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
