import { useMemo, useState } from "react";
import { projects } from "../data/portfolio";

const filters = ["All", "Systems", "Embedded", "ML & Data", "Robotics", "Open source"];
const oneLiners = [
  "The Bro Code: a type means what it says.",
  "Intervention! The fault is handled.",
  "A little heat data. A very good umbrella.",
  "A Playbook page for bug fixes.",
  "Wait for it… timestamps in order.",
  "The paperwork episode, but with better search.",
  "The numbers don’t lie. Filters help them calm down.",
  "Challenge accepted: find a safer route.",
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return projects.filter((item) => {
      const matchesFilter = activeFilter === "All" || item.filters.includes(activeFilter);
      const searchable = [item.title, item.eyebrow, item.summary, item.detail, ...item.tools, ...item.filters].join(" ").toLowerCase();
      return matchesFilter && (!term || searchable.includes(term));
    });
  }, [activeFilter, query]);

  return (
    <section className="inner-page section-shell">
      <div className="page-heading page-heading-image">
        <div><p className="eyebrow">The Playbook</p><h1>Things I’ve <em>built.</em></h1><p className="page-subtitle">A few projects. No disguises required.</p></div>
        <img src="/images/apartment-projects.webp" alt="A Manhattan roommate apartment with a blue sofa and yellow umbrella" />
      </div>
      <div className="projects-tools">
        <div className="filter-list" role="group" aria-label="Filter projects">
          {filters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? "filter-chip active" : "filter-chip"} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
        </div>
        <label className="project-search"><span aria-hidden="true">⌕</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the Playbook…" aria-label="Search projects"/></label>
      </div>
      <p className="result-count" aria-live="polite">{filtered.length} {filtered.length === 1 ? "project" : "projects"}</p>
      <div className="project-list">
        {filtered.map((project, index) => (
          <article className="project-entry" key={project.title}>
            <div className="entry-index">{String(index + 1).padStart(2, "0")}</div>
            <div className="entry-main"><p className="project-eyebrow">{project.eyebrow}</p><h2>{project.title}</h2><p>{project.summary}</p>
              <details><summary>Okay, what did it actually do?</summary><p>{project.detail}</p></details>
              <div className="tool-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </div>
            <div className="entry-result"><strong>{project.result ?? ""}</strong><span>{oneLiners[index % oneLiners.length]}</span></div>
          </article>
        ))}
        {filtered.length === 0 && <p className="no-results">No matches. Clear the search or try another filter.</p>}
      </div>
      <p className="page-end-joke">I promise the next project won’t take nine seasons.</p>
    </section>
  );
}
