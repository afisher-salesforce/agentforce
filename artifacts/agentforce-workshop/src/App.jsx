import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import sfLogo from "@assets/salesforce-logo.jpg";
import { navSections, pages, routeOrder, searchIndex } from "./data";

function SearchCard() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = !q
      ? searchIndex.slice(0, 8)
      : searchIndex.filter((item) =>
          [item.code, item.name, item.description, item.location]
            .join(" ")
            .toLowerCase()
            .includes(q),
        );
    return list.slice(0, 12);
  }, [query]);

  useEffect(() => {
    setActive(filtered.length ? 0 : -1);
  }, [query, filtered.length]);

  function go(item) {
    if (!item) return;
    navigate(item.path);
    setOpen(false);
    setQuery("");
  }

  return (
    <div className="search-shell">
      <p className="search-title">Search</p>
      <input
        className="search-input"
        value={query}
        placeholder="Search capabilities or domains"
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
        onKeyDown={(e) => {
          if (!open) return;
          if (e.key === "ArrowDown") { e.preventDefault(); setActive((p) => (p + 1) % filtered.length); }
          else if (e.key === "ArrowUp") { e.preventDefault(); setActive((p) => (p - 1 + filtered.length) % filtered.length); }
          else if (e.key === "Enter") { e.preventDefault(); go(filtered[active]); }
          else if (e.key === "Escape") setOpen(false);
        }}
      />
      {open && (
        <div className="search-card">
          <div className="search-card-head">Capability Results</div>
          <div className="search-results">
            {filtered.length === 0 ? (
              <div className="search-result"><h4>No matches</h4><p>Try agent, data, governance, or support.</p></div>
            ) : (
              filtered.map((item, i) => (
                <button
                  key={item.code + item.name}
                  className={`search-result ${i === active ? "is-active" : ""}`}
                  onMouseDown={() => go(item)}
                  type="button"
                >
                  <code>{item.code}</code>
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <small>{item.location}</small>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SectionBlock({ sec }) {
  return (
    <div className="section-block">
      {sec.title && <h3 className="section-title">{sec.title}</h3>}
      {sec.subhead && <p className="section-subhead">{sec.subhead}</p>}
      {sec.note && (
        <p className="section-note">
          <a href={sec.note.href} target="_blank" rel="noopener noreferrer">{sec.note.label}</a>
        </p>
      )}
      {sec.cards && (
        <div className={`grid-${sec.cards.length === 3 ? "3" : "2"}`}>
          {sec.cards.map((card, i) => (
            <div key={i} className="card">
              <h4>{card.title}</h4>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      )}
      {sec.bullets && (
        <ul>
          {sec.bullets.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )}
      {sec.trailhead && (
        <>
          {sec.trailhead.map((res, i) => (
            <div key={i} className="card trailhead-card">
              <h4>{res.title}</h4>
              <p>{res.description}</p>
              <span className="trailhead-meta">{res.meta}</span>
              <a href={res.href} target="_blank" rel="noopener noreferrer" className="trailhead-link">
                Open Trailhead resource ↗
              </a>
            </div>
          ))}
        </>
      )}
      {sec.legal && <p className="legal-text">{sec.legal}</p>}
    </div>
  );
}

function PageView({ path }) {
  const data = pages[path];
  const idx = routeOrder.indexOf(path);
  const prev = routeOrder[(idx - 1 + routeOrder.length) % routeOrder.length];
  const next = routeOrder[(idx + 1) % routeOrder.length];
  const allLinks = navSections.flatMap((s) => s.links);
  const prevLabel = allLinks.find((l) => l.path === prev)?.label;
  const nextLabel = allLinks.find((l) => l.path === next)?.label;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [path]);

  return (
    <div className="container route-fade">
      {data.hero && (
        <section className="hero" style={{ backgroundImage: `url("${data.hero}")` }}>
          <div className="hero-content">
            <span className="pill">{data.pill}</span>
            <h2>{data.title}</h2>
            <p className="subhead">{data.subhead}</p>
          </div>
        </section>
      )}

      <section className="panel">
        {!data.hero && (
          <div className="pad">
            <span className="pill">{data.pill}</span>
            <h2>{data.title}</h2>
            <p className="subhead">{data.subhead}</p>
            {data.citation && (
              <p className="citation-link">
                <a href={data.citation.href} target="_blank" rel="noopener noreferrer">
                  {data.citation.label}
                </a>
              </p>
            )}
          </div>
        )}
        {data.sections.map((sec, i) => (
          <SectionBlock key={i} sec={sec} />
        ))}
      </section>

      <div className="flow-nav">
        <Link to={prev}>← {prevLabel}</Link>
        <Link to={next}>{nextLabel} →</Link>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [presentationMode, setPresentationMode] = useState(false);

  useEffect(() => {
    function handler(e) {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      const idx = routeOrder.indexOf(location.pathname);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        navigate(routeOrder[(idx + 1) % routeOrder.length]);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        navigate(routeOrder[(idx - 1 + routeOrder.length) % routeOrder.length]);
      } else if (e.key === "p" || e.key === "P") {
        setPresentationMode((prev) => !prev);
      }
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [location.pathname, navigate]);

  return (
    <div className={`app-shell ${collapsed ? "nav-collapsed" : ""} ${presentationMode ? "presentation" : ""}`}>
      <aside className="sidebar">
        <div className="brand">
          <h1>Agentforce Workshop</h1>
          <p>Siemens DISW IT Leadership Executive Discussion</p>
          <div className="logo-pill">
            <img className="brand-logo" src={sfLogo} alt="Salesforce logo" />
          </div>
        </div>
        <SearchCard />
        {navSections.map((section) => (
          <div className="nav-group" key={section.title}>
            <p className="nav-title">{section.title}</p>
            {section.links.map((link) => (
              <Link
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                key={link.path}
                to={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </aside>

      <main className="main">
        <div className="controls-row">
          <button className="nav-toggle" onClick={() => setCollapsed((p) => !p)} type="button">
            {collapsed ? "Show Navigation" : "Hide Navigation"}
          </button>
          <button className="nav-toggle secondary" onClick={() => setPresentationMode((p) => !p)} type="button">
            {presentationMode ? "Exit Presentation" : "Presentation Mode"}
          </button>
        </div>
        <Routes>
          {routeOrder.map((path) => (
            <Route key={path} path={path} element={<PageView path={path} />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
