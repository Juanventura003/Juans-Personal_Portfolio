export default function StatusBar({ section }: { section: string }) {
  return (
    <div className="statusbar" aria-hidden="true">
      <span>
        <span className="mode">NORMAL</span>&nbsp; portfolio.tsx
      </span>
      <span className="right">
        <span className="hide-sm">utf-8</span>
        <span className="hide-sm">tsx</span>
        <span>{section}</span>
      </span>
    </div>
  )
}
