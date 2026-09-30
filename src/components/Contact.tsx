import { useRef, useState } from 'react'
import SectionHead from './SectionHead.tsx'
import { profile } from '../data.ts'

export default function Contact() {
  const [label, setLabel] = useState('copy')
  const emailRef = useRef<HTMLElement>(null)

  const flash = (text: string) => {
    setLabel(text)
    window.setTimeout(() => setLabel('copy'), 1600)
  }

  const selectEmail = () => {
    const el = emailRef.current
    if (!el) return
    const range = document.createRange()
    range.selectNodeContents(el)
    const sel = window.getSelection()
    sel?.removeAllRanges()
    sel?.addRange(range)
    flash('selected')
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      flash('copied')
    } catch {
      selectEmail()
    }
  }

  return (
    <section id="contact">
      <SectionHead title="contact" path="" />
      <div className="contact">
        <p className="big">Connect with me</p>
        <div className="email-row">
          <a href={`mailto:${profile.email}`}>
            <code ref={emailRef}>{profile.email}</code>
          </a>
          <button className="btn" type="button" onClick={copy}>
            {label}
          </button>
        </div>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">github ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin ↗</a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">resume.pdf ↗</a>
        </div>
      </div>
    </section>
  )
}
