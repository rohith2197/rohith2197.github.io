const skillHighlights = [
  { title: "Systems & embedded", skills: ["C/C++", "Rust", "Linux & POSIX", "STM32", "Zephyr", "FreeRTOS", "UART", "Pub/Sub", "Concurrency"] },
  { title: "Data & applied ML", skills: ["Python", "Pandas", "NumPy", "NLP", "Vector embeddings", "Computer vision", "Time-series analysis", "Kalman filtering", "State estimation", "Model quantization"] },
  { title: "Performance & tools", skills: ["GCC / Clang", "Valgrind", "perf", "Bazel", "Docker", "Git", "Jupyter", "Renode", "PyBullet"] },
  { title: "Cloud, research & algorithms", skills: ["AWS Cognito", "Django", "SQLite / sqlite-vec", "RAG", "LiDAR", "SOLWEIG", "Dijkstra", "Graph models", "Statistics"] },
];

const personalInterests = [
  { title: "Shows & films", interests: ["How I Met Your Mother", "Modern Family", "The Hunger Games", "Dune films"] },
  { title: "Fight sports", interests: ["UFC", "Boxing", "Wrestling", "BJJ"] },
  { title: "On the grid", interests: ["Formula 1"] },
];

export function AboutPage() {
  return (
    <section className="inner-page section-shell">
      <div className="page-heading page-heading-image">
        <div><p className="eyebrow">About</p><h1>Haaaaave you met <em>Rohith?</em></h1><p className="page-subtitle">A Georgia Tech CS student, curious about a lot of fields—technical and otherwise.</p></div>
        <img src="/images/about-horn-window.webp" alt="A blue French horn and yellow umbrella beside a moonlit city window" />
      </div>
      <div className="about-page-grid">
        <article className="education-panel"><span className="eyebrow">Education</span><h2>Georgia Institute of Technology</h2><p>Bachelor of Science in Computer Science <span>·</span> GPA 4.0</p><div className="education-meta"><span>Atlanta, Georgia</span><span>May 2028</span></div></article>
        <div className="about-note"><h2>Curious by <em>default.</em></h2><p>I like understanding how software works—from the bit on the wire to the person relying on it. Different topics, same curiosity.</p><a className="text-link" href="https://www.linkedin.com/in/rohith-pallamreddy/" target="_blank" rel="noreferrer">Find me on LinkedIn <span aria-hidden="true">↗</span></a></div>
      </div>
      <section className="skill-section">
        <div className="skill-heading"><div><p className="eyebrow">Skills</p><h2>My <em>toolkit.</em></h2></div></div>
        <div className="skill-groups">{skillHighlights.map((group) => <article className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-chips">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>
      <section className="personal-section">
        <div className="personal-heading"><p className="eyebrow">Off the clock</p><h2>My other <em>interests.</em></h2></div>
        <div className="interest-groups">{personalInterests.map((group) => <article className="interest-group" key={group.title}><h3>{group.title}</h3><div className="interest-chips">{group.interests.map((interest) => <span key={interest}>{interest}</span>)}</div></article>)}</div>
      </section>
    </section>
  );
}
