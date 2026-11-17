import { Link } from "react-router-dom";

export function ContactPage() {
  return (
    <section className="contact-page section-shell">
      <h1>Have a good <em>story?</em></h1>
      <p className="contact-intro">Tell me about the hard problem, the interesting project, or the role that could use a “challenge accepted.”</p>
      <a className="email-card" href="mailto:p.rohith1907@gmail.com"><span>Email</span><strong>p.rohith1907@gmail.com</strong><i aria-hidden="true">↗</i></a>
      <div className="contact-options"><a href="https://github.com/rohith2197" target="_blank" rel="noreferrer"><span>Code</span><strong>GitHub</strong><i aria-hidden="true">↗</i></a><a href="https://www.linkedin.com/in/rohith-pallamreddy/" target="_blank" rel="noreferrer"><span>Connect</span><strong>LinkedIn</strong><i aria-hidden="true">↗</i></a></div>
      <p className="contact-joke">A response takes less time than Ted’s story. Probably.</p>
      <Link className="quiet-link" to="/">← Back to the beginning</Link>
    </section>
  );
}
