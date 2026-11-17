import { useState } from "react";
import { Link } from "react-router-dom";
import { JokeButton, UmbrellaIcon } from "../components/SiteLayout";

const apartmentArt = "/manus-storage/async-images/9ZRTkjgkeDWI3PAg55bsvq/image-1.webp";
const pubArt = "/manus-storage/async-images/9ZRTkjgkeDWI3PAg55bsvq/image-2.webp";

const pageCards = [
  { to: "/projects", name: "Projects", note: "The Playbook", image: apartmentArt, alt: "A warm New York roommate apartment with a blue sofa, yellow umbrella and blue French horn", joke: "The apartment where the Playbook lives." },
  { to: "/experience", name: "Experience", note: "Previously, on…", image: pubArt, alt: "A cozy neighborhood pub with warm lights and a yellow umbrella", joke: "One round of work experience, coming up." },
  { to: "/about", name: "About", note: "About Rohith", image: "/manus-storage/async-images/tRPv8Qrh2JUtqpNK28ymmn/image-3.webp", alt: "A blue French horn and yellow umbrella by a city window", joke: "The horn made the director’s cut." },
];

export function HomePage() {
  const [spun, setSpun] = useState(false);
  return (
    <div className="home-page">
      <section className="hero-wrap">
        <div className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Georgia Tech · Computer Science</p>
            <h1>I build systems that are <em>legen—wait for it—dary.</em></h1>
            <p className="hero-description">I’m Rohith, a computer science student at Georgia Tech. I’m excited by a lot of fields and always curious to learn something new.</p>
            <div className="hero-actions">
              <Link className="button button-dark" to="/projects">See the projects <span aria-hidden="true">↗</span></Link>
              <Link className="quiet-link" to="/experience">Previously, on Rohith…</Link>
            </div>
            <button className="umbrella-spin-button" type="button" onClick={() => setSpun(!spun)} aria-label="Spin the yellow umbrella">
              <UmbrellaIcon className={spun ? "hero-umbrella spun" : "hero-umbrella"} />
              <span>Spin the umbrella</span>
            </button>
          </div>
          <figure className="hero-art">
            <img src="/manus-storage/async-images/KXevBiOIKpyR3CwlExgwig/image-1.webp" alt="A yellow umbrella and blue French horn on a Manhattan side street at night." fetchPriority="high" />
            <span className="art-note art-note-top">the important stuff</span>
            <span className="art-note art-note-bottom">wait for it…</span>
            <span className="little-spark" aria-hidden="true">✳</span>
          </figure>
        </div>
      </section>

      <section className="hello-strip">
        <p>I’m Rohith Pallamreddy. I like solving hard engineering problems.</p>
      </section>

      <section className="page-card-section section-shell">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">Pick a page</p><h2>Choose your <em>chapter.</em></h2></div>
        </div>
        <div className="page-card-grid">
          {pageCards.map((card) => (
            <Link className="page-card" to={card.to} key={card.to}>
              <div className="page-card-art"><img src={card.image} alt={card.alt} loading="lazy"/><span className="hover-joke">{card.joke}</span><span className="page-card-arrow" aria-hidden="true">↗</span></div>
              <div className="page-card-copy"><span>{card.note}</span><h3>{card.name}</h3></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-quip section-shell">
        <h2>Challenge accepted.</h2>
        <p className="home-quip-subtitle">What should we build next?</p>
        <div className="home-quip-actions"><Link to="/contact" className="text-link">Let’s find out <span aria-hidden="true">↗</span></Link><JokeButton /></div>
      </section>
    </div>
  );
}
