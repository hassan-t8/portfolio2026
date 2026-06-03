export default function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article className={`card proj ${project.featured ? "is-featured" : ""}`}>
      <div className="head">
        <span className="index mono">{num}</span>
        {project.featured ? <span className="star">★ featured</span> : <span className="when">{project.period}</span>}
      </div>
      <h3>{project.name}</h3>
      <div className="sub">{project.subtitle}</div>
      <ul>
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="stack">
        {project.tech.map((t) => (
          <span className="t" key={t}>{t}</span>
        ))}
      </div>
    </article>
  );
}
