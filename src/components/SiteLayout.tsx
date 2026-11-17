import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const jokes = [
  "Intervention! That bug is now addressed.",
  "Challenge accepted. Green build.",
  "Wait for it… all tests passed.",
  "The Bro Code: document your interfaces.",
  "Slap bet: zero failed tests. Terms apply.",
];

export function UmbrellaIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 44 40" fill="none">
      <path d="M3.5 20.5C5.2 10.7 12.7 4.5 22 4.5s16.8 6.2 18.5 16H3.5Z" fill="currentColor" />
      <path d="M22 20.5v13c0 5.7 8.4 5.8 8.4.3" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
      <path d="M11.5 20.5c1.4-3.8 5.2-6.8 10.5-6.8s9.1 3 10.5 6.8" stroke="#b58337" strokeWidth="1.1" opacity=".8" />
    </svg>
  );
}

export function JokeButton() {
  const [joke, setJoke] = useState("");
  const [index, setIndex] = useState(-1);
  return (
    <div className="quip-control">
      <button className="quip-button" type="button" onClick={() => { const next = (index + 1) % jokes.length; setIndex(next); setJoke(jokes[next]); }}>
        <span aria-hidden="true">✳</span> Need an intervention?
      </button>
      {joke && <span className="quip-output" role="status">{joke}</span>}
    </div>
  );
}

const navItems = [
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["About", "/about"],
] as const;

export function SiteLayout() {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <Link className="site-name" to="/">Rohith Pallamreddy<span className="name-period">.</span></Link>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{label}</NavLink>)}
        </nav>
        <NavLink className={({ isActive }) => isActive ? "nav-contact active" : "nav-contact"} to="/contact">Say hello <span aria-hidden="true">↗</span></NavLink>
      </header>
      <main id="main" key={location.pathname} className="page-transition"><Outlet /></main>
      <footer className="site-footer">
        <div className="footer-inner">
          <Link className="footer-name" to="/">Rohith Pallamreddy</Link>
          <p>No slap bet required.</p>
          <a href="mailto:p.rohith1907@gmail.com">Email me <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </>
  );
}
