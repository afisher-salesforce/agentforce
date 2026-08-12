import { Component, useEffect, useMemo, useRef, useState } from "react";
import { ClerkProvider, SignIn, SignUp, useAuth, useClerk, useUser } from "@clerk/react";
import { publishableKeyFromHost } from "@clerk/react/internal";
import { dark } from "@clerk/themes";
import { Switch, Route, Link, Redirect, useLocation, Router as WouterRouter } from "wouter";

// ── Clerk setup (verbatim) ────────────────────────────────────────────────────
const clerkPubKey = publishableKeyFromHost(
  window.location.hostname,
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
);
const clerkProxyUrl = import.meta.env.VITE_CLERK_PROXY_URL;
const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function stripBase(path) {
  return basePath && path.startsWith(basePath) ? path.slice(basePath.length) || "/" : path;
}

// ── Appearance ────────────────────────────────────────────────────────────────
const clerkAppearance = {
  theme: dark,
  options: {
    logoPlacement: "inside",
    logoLinkUrl: basePath || "/",
    logoImageUrl: `${window.location.origin}${basePath}/logo.svg`,
  },
  variables: {
    colorPrimary: "#009999",
    colorForeground: "#e2e8f0",
    colorMutedForeground: "#94a3b8",
    colorDanger: "#ef4444",
    colorBackground: "#0d1117",
    colorInput: "#161b22",
    colorInputForeground: "#e2e8f0",
    colorNeutral: "#30363d",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    borderRadius: "0.375rem",
  },
  elements: {
    rootBox: { width: "100%", display: "flex", justifyContent: "center" },
    cardBox: {
      backgroundColor: "#161b22",
      borderRadius: "0.75rem",
      width: "440px",
      maxWidth: "100%",
      overflow: "hidden",
      border: "1px solid #30363d",
    },
    card: { boxShadow: "none", border: "none", backgroundColor: "transparent", borderRadius: "0" },
    header: { padding: "2rem 2rem 0" },
    main: { padding: "1.5rem 2rem 2rem" },
    footer: { backgroundColor: "#0d1117", borderTop: "1px solid #21262d", padding: "1rem 2rem" },
    socialButtonsBlockButton: {
      backgroundColor: "#21262d",
      border: "1px solid #30363d",
      color: "#e2e8f0",
    },
    dividerLine: { backgroundColor: "#30363d" },
    dividerText: { color: "#64748b" },
    formFieldInput: {
      backgroundColor: "#0d1117",
      border: "1px solid #30363d",
      color: "#e2e8f0",
    },
    formButtonPrimary: {
      backgroundColor: "#009999",
      color: "#ffffff",
    },
    identityPreviewEditButtonIcon: { color: "#94a3b8" },
  },
};

// ── Sign-in / sign-up pages ───────────────────────────────────────────────────
function SignInPage() {
  const { isLoaded, isSignedIn } = useAuth();
  if (isLoaded && isSignedIn) return <Redirect to="/" />;
  return (
    <div style={{
      display: "flex",
      minHeight: "100dvh",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0d1117",
      padding: "1.5rem",
    }}>
      <SignIn routing="path" path={`${basePath}/sign-in`} />
    </div>
  );
}

function SignUpPage() {
  const { isLoaded, isSignedIn } = useAuth();
  if (isLoaded && isSignedIn) return <Redirect to="/" />;
  return (
    <div style={{
      display: "flex",
      minHeight: "100dvh",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0d1117",
      padding: "1.5rem",
    }}>
      <SignUp routing="path" path={`${basePath}/sign-up`} />
    </div>
  );
}

// ── Landing page (public, unauthenticated) ────────────────────────────────────
function Landing() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100dvh",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0d1117",
      padding: "1.5rem",
    }}>
      <div style={{
        maxWidth: "520px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}>
        <img
          src="/logo.svg"
          alt=""
          style={{ width: "96px", height: "auto", marginBottom: "0.25rem" }}
        />

        {/* Title */}
        <h1 style={{
          color: "#e2e8f0",
          fontSize: "2.75rem",
          fontWeight: "700",
          margin: 0,
          lineHeight: 1.15,
        }}>
          Agentforce Workshop
        </h1>

        {/* Subtitle */}
        <p style={{
          color: "#009999",
          fontSize: "1.0625rem",
          fontWeight: "600",
          margin: 0,
        }}>
          Siemens DISW IT Leadership Executive Discussion
        </p>

        {/* Body */}
        <p style={{
          color: "#94a3b8",
          fontSize: "0.9375rem",
          lineHeight: "1.65",
          margin: 0,
          maxWidth: "460px",
        }}>
          An internal briefing resource covering Salesforce AI capabilities and
          the Agentforce platform for the Siemens DISW IT leadership team.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
          <Link
            href={`${basePath}/sign-in`}
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: "#009999",
              color: "#ffffff",
              borderRadius: "0.375rem",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.9375rem",
            }}
          >
            Sign In
          </Link>
          <Link
            href={`${basePath}/sign-up`}
            style={{
              padding: "0.75rem 2rem",
              backgroundColor: "transparent",
              color: "#e2e8f0",
              borderRadius: "0.375rem",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "0.9375rem",
              border: "1.5px solid #30363d",
            }}
          >
            Request Access
          </Link>
        </div>

        {/* Domain pills */}
        <div style={{ display: "flex", gap: "0.625rem", marginTop: "0.25rem" }}>
          {["@salesforce.com", "@siemens.com"].map((domain) => (
            <span
              key={domain}
              style={{
                padding: "0.375rem 0.875rem",
                borderRadius: "999px",
                border: "1px solid rgba(0,153,153,0.45)",
                backgroundColor: "rgba(0,153,153,0.08)",
                color: "#009999",
                fontSize: "0.8125rem",
                fontWeight: "500",
              }}
            >
              {domain}
            </span>
          ))}
        </div>

        {/* Caption */}
        <p style={{ color: "#475569", fontSize: "0.8125rem", margin: 0 }}>
          Access restricted to Salesforce and Siemens email domains
        </p>
      </div>
    </div>
  );
}

// Uses useAuth() directly so we can show LoadingScreen during Clerk init
// instead of the blank-page that <Show> produces before isLoaded is true.
function HomeRoute() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  if (isSignedIn) {
    return <Redirect to="/" />;
  }

  return <Landing />;
}

// ── Search ────────────────────────────────────────────────────────────────────
function SearchCard({ searchIndex }) {
  const [, setLocation] = useLocation();
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
  }, [query, searchIndex]);

  useEffect(() => {
    setActive(filtered.length ? 0 : -1);
  }, [query, filtered.length]);

  function go(item) {
    if (!item) return;
    setLocation(item.path);
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

// ── Page content ──────────────────────────────────────────────────────────────
function PageView({ path, pages, routeOrder, navSections }) {
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
            {data.subhead ? <p className="subhead">{data.subhead}</p> : null}
          </div>
        </section>
      )}
      <section className="panel">
        {!data.hero && (
          <div className="pad">
            <span className="pill">{data.pill}</span>
            <h2>{data.title}</h2>
            {data.subhead ? <p className="subhead">{data.subhead}</p> : null}
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
        <Link href={prev}>Previous: {prevLabel}</Link>
        <Link href={next}>Next: {nextLabel}</Link>
      </div>
    </div>
  );
}

// ── Domain enforcement ────────────────────────────────────────────────────────
function DomainRejected() {
  const { signOut } = useClerk();
  const hasSignedOutRef = useRef(false);

  useEffect(() => {
    if (hasSignedOutRef.current) return;
    hasSignedOutRef.current = true;

    // Defer sign-out one tick to avoid auth state churn loops.
    const timer = window.setTimeout(() => {
      void signOut({ redirectUrl: basePath || "/" });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [signOut]);

  return (
    <div style={{
      display: 'flex',
      minHeight: '100dvh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0d1117',
      padding: '1.5rem',
    }}>
      <div style={{ maxWidth: '420px', width: '100%', textAlign: 'center' }}>
        <div style={{
          backgroundColor: '#161b22',
          borderRadius: '0.75rem',
          padding: '2rem',
          border: '1px solid #30363d',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔒</div>
          <h2 style={{ color: '#e2e8f0', fontSize: '1.125rem', fontWeight: '700', margin: '0 0 0.75rem' }}>
            Access Restricted
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: '1.6', margin: 0 }}>
            This site is available to <strong style={{ color: '#e2e8f0' }}>salesforce.com</strong> and{' '}
            <strong style={{ color: '#e2e8f0' }}>siemens.com</strong> email domains only.
            You are being signed out.
          </p>
        </div>
      </div>
    </div>
  );
}

function DomainGuard() {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  // null = pending server response, true = allowed, false = denied
  const [serverAllowed, setServerAllowed] = useState(null);
  // null = not yet fetched, object = fetched content
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    let cancelled = false;
    (async () => {
      try {
        const token = await getToken();

        // Step 1: verify allowlist membership
        const authRes = await fetch("/api/auth/check", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!authRes.ok) {
          if (!cancelled) setServerAllowed(false);
          return;
        }

        // Step 2: fetch protected content (only reachable by allowlisted users)
        const dataRes = await fetch("/api/content/data", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!cancelled) {
          if (dataRes.ok) {
            const json = await dataRes.json();
            setAppData(json);
            setServerAllowed(true);
          } else {
            setServerAllowed(false);
          }
        }
      } catch {
        if (!cancelled) setServerAllowed(false);
      }
    })();

    return () => { cancelled = true; };
  }, [isLoaded, isSignedIn, getToken]);

  if (!isLoaded || serverAllowed === null) {
    return <LoadingScreen />;
  }

  if (!isSignedIn) {
    return null;
  }

  if (!serverAllowed || !appData) {
    return <DomainRejected />;
  }

  return <AppShell appData={appData} />;
}

function LoadingScreen() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100dvh",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0d1117",
    }}>
      <div style={{ color: "#94a3b8", fontSize: "0.9375rem" }}>Loading…</div>
    </div>
  );
}

// ── Protected app shell (rendered only when signed in) ────────────────────────
function AppShell({ appData }) {
  const { navSections, pages, searchIndex } = appData;
  // Derive routeOrder from navSections (same logic as the old data.js)
  const routeOrder = navSections.flatMap((section) => section.links.map((link) => link.path));

  const [location, setLocation] = useLocation();
  const { signOut } = useClerk();
  const { user } = useUser();
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
        const idx = routeOrder.indexOf(location);
        if (idx >= 0) setLocation(routeOrder[(idx + 1) % routeOrder.length]);
      }
      if (event.key === "ArrowLeft") {
        const idx = routeOrder.indexOf(location);
        if (idx >= 0) setLocation(routeOrder[(idx - 1 + routeOrder.length) % routeOrder.length]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [location, setLocation, routeOrder]);

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
        <SearchCard searchIndex={searchIndex} />
        {navSections.map((section) => (
          <div className="nav-group" key={section.title}>
            <p className="nav-title">{section.title}</p>
            {section.links.map((link) => (
              <Link
                className={`nav-link ${location === link.path ? "active" : ""}`}
                key={link.path}
                href={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="nav-group" style={{ marginTop: "auto", paddingTop: "1rem", borderTop: "1px solid #1e293b" }}>
          {user?.primaryEmailAddress?.emailAddress && (
            <p style={{ fontSize: "0.75rem", color: "#64748b", padding: "0 0.75rem 0.5rem", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {user.primaryEmailAddress.emailAddress}
            </p>
          )}
          <button
            className="nav-link"
            style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", width: "100%", color: "#94a3b8" }}
            onClick={() => signOut({ redirectUrl: basePath || "/" })}
            type="button"
          >
            Sign Out
          </button>
        </div>
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
        <Switch>
          {routeOrder.map((path) => (
            <Route key={path} path={path}>
              <PageView
                path={path}
                pages={pages}
                routeOrder={routeOrder}
                navSections={navSections}
              />
            </Route>
          ))}
          <Route>
            <Redirect to={routeOrder[0]} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

// ── Auth gate for protected routes ───────────────────────────────────────────
// Replaces <Show> so we can show a loading state during Clerk initialization
// instead of rendering nothing (the blank-page symptom).
function AuthGate() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  if (!isSignedIn) {
    return <Redirect to="/sign-in" />;
  }

  return <DomainGuard />;
}

// ── Root router with Clerk ────────────────────────────────────────────────────
function ClerkProviderWithRoutes() {
  const [, setLocation] = useLocation();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      proxyUrl={clerkProxyUrl}
      appearance={clerkAppearance}
      signInUrl={`${basePath}/sign-in`}
      signUpUrl={`${basePath}/sign-up`}
      afterSignInUrl={`${basePath}/`}
      afterSignUpUrl={`${basePath}/`}
      localization={{
        signIn: {
          start: {
            title: "Agentforce Workshop",
            subtitle: "Sign in to access the executive discussion",
          },
        },
        signUp: {
          start: {
            title: "Request Access",
            subtitle: "Create an account to join the workshop",
          },
        },
      }}
      routerPush={(to) => setLocation(stripBase(to))}
      routerReplace={(to) => setLocation(stripBase(to), { replace: true })}
    >
      <Switch>
        <Route path="/" component={HomeRoute} />
        <Route path="/sign-in/*?" component={SignInPage} />
        <Route path="/sign-up/*?" component={SignUpPage} />
        <Route>
          <AuthGate />
        </Route>
      </Switch>
    </ClerkProvider>
  );
}

// ── Error boundary ────────────────────────────────────────────────────────────
// Catches any uncaught JS errors in the tree and renders a visible message
// instead of the silent blank page that an unhandled error would produce.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{
          display: "flex",
          minHeight: "100dvh",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d1117",
          padding: "2rem",
        }}>
          <div style={{
            maxWidth: "520px",
            backgroundColor: "#161b22",
            borderRadius: "0.75rem",
            padding: "2rem",
            border: "1px solid #30363d",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚠️</div>
            <h2 style={{ color: "#e2e8f0", fontSize: "1.125rem", fontWeight: "700", margin: "0 0 0.75rem" }}>
              Something went wrong
            </h2>
            <pre style={{
              color: "#94a3b8",
              fontSize: "0.75rem",
              textAlign: "left",
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              margin: 0,
            }}>
              {this.state.error?.message}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <WouterRouter base={basePath}>
        <ClerkProviderWithRoutes />
      </WouterRouter>
    </ErrorBoundary>
  );
}
