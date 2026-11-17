import { experience } from "../data/portfolio";

export function ExperiencePage() {
  return (
    <section className="inner-page section-shell">
      <div className="page-heading page-heading-image">
        <div><p className="eyebrow">Previously, on…</p><h1>The plot <em>so far.</em></h1><p className="page-subtitle">The work so far, minus the narrator.</p></div>
        <img src="/manus-storage/async-images/9ZRTkjgkeDWI3PAg55bsvq/image-2.webp" alt="A neighborhood pub with wood booths, warm lights, and a yellow umbrella" />
      </div>
      <div className="timeline-list">
        {experience.map((item) => (
          <article className="timeline-entry" key={`${item.organization}-${item.role}`}>
            <div className="timeline-date"><span>{item.period}</span><i /></div>
            <div className="timeline-copy"><h2>{item.organization}</h2><p className="timeline-role">{item.role} <span>·</span> {item.location}</p><p>{item.note}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
