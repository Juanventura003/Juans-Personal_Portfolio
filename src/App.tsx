import { useActiveSection } from './hooks/useActiveSection.ts'
import Nav from './components/Nav.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Experience from './components/Experience.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'
import StatusBar from './components/StatusBar.tsx'
import { profile } from './data.ts'

const SECTIONS = ['top', 'about', 'projects', 'experience', 'stack', 'contact']

export default function App() {
  const active = useActiveSection(SECTIONS)

  return (
    <>
      <div className="wrap">
        <Nav active={active} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <footer className="footer">
          © {new Date().getFullYear()} {profile.name} · built with React &amp; TypeScript
        </footer>
      </div>
      <StatusBar section={active} />
    </>
  )
}
