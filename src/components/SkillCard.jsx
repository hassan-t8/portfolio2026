import { Icon } from "./Icons";

export default function SkillCard({ skill }) {
  const Glyph = Icon[skill.icon] || Icon.tools;
  return (
    <article className="card skill-card">
      <div className="ic"><Glyph /></div>
      <h3>{skill.category}</h3>
      <div className="tags">
        {skill.items.map((it) => (
          <span className="tag" key={it}>{it}</span>
        ))}
      </div>
    </article>
  );
}
