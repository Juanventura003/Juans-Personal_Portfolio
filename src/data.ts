// All site content lives here. Edit this file to update the portfolio —
// the components read from it, so you rarely need to touch them.

export interface Link {
  label: string
  href: string
}

export interface Project {
  slug: string
  name: string
  summary: string
  highlights: string[]
  tags: string[]
  links: Link[]
}

export interface Role {
  hash: string
  current?: boolean
  dates: string
  title: string
  org: string
  points: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
}

export const profile = {
  name: 'Juan Ventura',
  handle: 'juan',
  role: 'Computer Science student & software engineer',
  tagline:
    'I build full-stack web apps with React, Node, and SQL, from interactive front ends to the APIs and databases behind them.',
  status: 'Graduating Dec 2026 · open to new-grad roles',
  location: 'Long Island, NY',
  // Double-check this: your resume says "Juanventur003@gmail.com" (no "a"),
  // while your account email is Juanventura003@gmail.com.
  email: 'Juanventura003@gmail.com',
  github: 'https://github.com/Juanventura003',
  linkedin: 'https://www.linkedin.com/in/Juanventura003/',
  // Put your resume PDF in /public as resume.pdf and this link will work.
  resume: '/resume.pdf',
}

export const about: string[] = [
  "I'm a Computer Science student at Farmingdale State College, graduating in December 2026. I like building things people actually use: a calendar that students check every week, a website a small business runs on, a playlist generator that talks to Spotify.",
  "Right now I'm a Software Engineer Intern at Touro University, where I'm building an interactive academic calendar from requirements through testing. My coursework covers data structures and algorithms, operating systems, networks, databases, and software engineering.",
]

export const facts: [string, string][] = [
  ['location', 'Long Island, NY'],
  ['school', 'Farmingdale State'],
  ['degree', 'B.S. Computer Science'],
  ['grad', 'Dec 2026'],
  ['focus', 'full-stack web'],
]

export const projects: Project[] = [
  {
    slug: 'h-ventura-tree-services',
    name: 'H-Ventura Tree Services',
    summary:
      'A production website for a small tree-service business, with a React front end and an Express backend for customer inquiries.',
    highlights: [
      'React Router SPA with 7+ dynamic service detail pages',
      'Express backend for form submissions and transactional email',
      'Deployed on Vercel with continuous deployment from GitHub',
    ],
    tags: ['React', 'Node', 'Express', 'PostgreSQL'],
    links: [{ label: 'source', href: 'https://github.com/Juanventura003' }],
  },
  {
    slug: 'mood-wave',
    name: 'Mood Wave',
    summary:
      'Generates custom Spotify playlists from mood keywords you type in, using the Spotify Web API.',
    highlights: [
      'OAuth 2.0 (PKCE) login with token exchange and auto-refresh',
      'Search and query logic built in vanilla JavaScript',
      'Spotify-themed responsive UI with loading and error states',
    ],
    tags: ['JavaScript', 'Spotify API', 'OAuth 2.0', 'CSS'],
    links: [{ label: 'source', href: 'https://github.com/Juanventura003' }],
  },
  {
    slug: 'touro-academic-calendar',
    name: 'Touro Academic Calendar',
    summary:
      'A full calendar UI built from scratch, with no calendar library, that renders academic terms and events from structured JSON.',
    highlights: [
      'Compares date ranges and flags conflicts between terms',
      'Multi-panel layout (calendar, events, calculations)',
      'Reflows cleanly on phones and small screens',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'JSON'],
    links: [{ label: 'source', href: 'https://github.com/Juanventura003' }],
  },
]

export const experience: Role[] = [
  {
    hash: 'a3f9c1e',
    current: true,
    dates: 'Sep 2025 – present',
    title: 'Software Engineer Intern',
    org: 'Touro University · Student Administration Services',
    points: [
      'Developing an interactive academic calendar in JavaScript, HTML, CSS, and JSON so students and staff can find scheduling info faster.',
      'Designed JSON data models that render events dynamically, so updates no longer need manual page edits.',
      'Working through the full SDLC with stakeholders, turning scheduling needs into features and testing them.',
    ],
  },
  {
    hash: '0c19b77',
    dates: 'Expected Dec 2026',
    title: 'B.S. Computer Science',
    org: 'Farmingdale State College',
    points: [
      'Coursework: Data Structures & Algorithms I–II, Advanced DS&A, Operating Systems, Computer Networks, Computer Architecture, Data Management (SQL), Software Engineering, Principles of Programming Languages.',
    ],
  },
]

export const skills: SkillGroup[] = [
  { title: 'Languages', items: ['JavaScript', 'Java', 'Python', 'SQL'] },
  { title: 'Frameworks', items: ['React', 'Node.js', 'Express.js', 'Spring Boot'] },
  {
    title: 'Data & tools',
    items: ['PostgreSQL · SQL Server', 'MongoDB', 'Pandas · NumPy', 'Git · Linux'],
  },
]
