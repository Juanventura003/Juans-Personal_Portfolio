interface Props {
  title: string
  path: string
}

export default function SectionHead({ title, path }: Props) {
  return (
    <div className="sec-head">
      <h2>{title}</h2>
      <span className="path">{path}</span>
    </div>
  )
}
