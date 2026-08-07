import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
          [item.code, item.name, item.description, item.location].join(" ").toLowerCase().includes(q),
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
  }

  return (
    <div className="search-shell">
      <p className="search-title">Search</p>
      <input
        className="search-input"
        value={query}
        placeholder="Search capabilities or domains"
        onFocus={() => setOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        onKeyDown={(event) => {
          if (!open) return;
          if (event.key === "ArrowDown") {
            event.preventDefault();
            if (!filtered.length) return;
            setActive((prev) => (prev + 1) % filtered.length);
          } else if (event.key === "ArrowUp") {
            event.preventDefault();
            if (!filtered.length) return;
            setActive((prev) => (prev - 1 + filtered.length) % filtered.length);
          } else if (event.key === "Enter") {
            event.preventDefault();
            go(filtered[active]);
          } else if (event.key === "Escape") {
            setOpen(false);
          }
        }}
      />
      {open && (
        <div className="search-card">
          <div className="search-card-head">Capability Results</div>
          <div className="search-results">
            {filtered.length === 0 ? (
              <div className="search-result">
                <h4>No matches</h4>
                <p>Try agent, data, governance, or support.</p>
              </div>
            ) : (
              filtered.map((item, index) => (
                <button
                  key={item.code + item.name}
                  className={`search-result ${index === active ? "is-active" : ""}`}
                  onClick={() => go(item)}
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

function PageView({ path }) {
  const data = pages[path];
  const idx = routeOrder.indexOf(path);
  const prev = routeOrder[(idx - 1 + routeOrder.length) % routeOrder.length];
  const next = routeOrder[(idx + 1) % routeOrder.length];
  const prevLabel = navSections.flatMap((s) => s.links).find((l) => l.path === prev)?.label;
  const nextLabel = navSections.flatMap((s) => s.links).find((l) => l.path === next)?.label;

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
          </div>
        )}
        {data.sections.map((section) => (
          <div className="topic" key={section.title}>
            <h3>{section.title}</h3>
            {section.subhead && <p className="subhead topic-subhead">{section.subhead}</p>}
            {section.cards && (
              <div className="grid-3">
                {section.cards.map((card) => (
                  <article className="card" key={card.title}>
                    <h4>{card.title}</h4>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>
            )}
            {section.resources && (
              <div className="grid-3">
                {section.resources.map((resource) => (
                  <article className="card resource-card" key={resource.title}>
                    <h4>{resource.title}</h4>
                    <p>{resource.body}</p>
                    <p className="resource-meta">{resource.label}</p>
                    <p className="resource-link-wrap">
                      <a className="resource-link" href={resource.url} target="_blank" rel="noopener noreferrer">
                        Open Trailhead resource
                      </a>
                    </p>
                  </article>
                ))}
              </div>
            )}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {section.legal && <p className="legal">{section.legal}</p>}
          </div>
        ))}
      </section>

      <div className="flow-nav">
        <Link to={prev}>Previous: {prevLabel}</Link>
        <Link to={next}>Next: {nextLabel}</Link>
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
    const persisted = window.localStorage.getItem("afw-nav-collapsed");
    setCollapsed(persisted === "1");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("afw-nav-collapsed", collapsed ? "1" : "0");
  }, [collapsed]);

  useEffect(() => {
    const handler = (event) => {
      if (event.key.toLowerCase() === "p") {
        setPresentationMode((prev) => !prev);
      }
      if (event.key === "ArrowRight") {
        const idx = routeOrder.indexOf(location.pathname);
        if (idx >= 0) navigate(routeOrder[(idx + 1) % routeOrder.length]);
      }
      if (event.key === "ArrowLeft") {
        const idx = routeOrder.indexOf(location.pathname);
        if (idx >= 0) navigate(routeOrder[(idx - 1 + routeOrder.length) % routeOrder.length]);
      }
    };
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
            <img className="brand-logo" src="/salesforce-logo.jpg" alt="Salesforce logo" />
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
          <button className="nav-toggle" onClick={() => setCollapsed((prev) => !prev)} type="button">
            {collapsed ? "Show Navigation" : "Hide Navigation"}
          </button>
          <button className="nav-toggle secondary" onClick={() => setPresentationMode((prev) => !prev)} type="button">
            {presentationMode ? "Exit Presentation Mode" : "Presentation Mode"}
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
