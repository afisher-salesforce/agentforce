const NAV_SECTIONS = [
  {
    title: "Overview",
    links: [
      { href: "index.html", label: "Executive Summary" }
    ]
  },
  {
    title: "Vignettes",
    links: [
      { href: "embedded-ai.html", label: "Embedded AI" },
      { href: "agentforce.html", label: "Agentforce" },
      { href: "data-360.html", label: "Data 360" },
      { href: "headless-360.html", label: "Headless 360" },
      { href: "observability.html", label: "Observability" }
    ]
  },
  {
    title: "Architecture",
    links: [
      { href: "capability-map.html", label: "Capability Map & Sequencing" },
      { href: "operating-model.html", label: "Operating Model & Next Steps" }
    ]
  },
  {
    title: "Appendix",
    links: [
      { href: "external-research.html", label: "External Research" },
      { href: "forward-looking-statement.html", label: "Forward Looking Statement" }
    ]
  }
];

const SEARCH_INDEX = [
  { code: "EAI", name: "Embedded AI Productivity Layer", description: "Embedded assistants in Salesforce workflows reduce repetitive execution and improve speed of guided decisions.", location: "Embedded AI", pageTitle: "Embedded AI", pageHref: "embedded-ai.html" },
  { code: "AFR", name: "Agentforce Runtime and Guardrails", description: "Agentforce with topics, actions, and trust controls enables deployable enterprise agents for IT-managed operations.", location: "Agentforce", pageTitle: "Agentforce", pageHref: "agentforce.html" },
  { code: "ARM", name: "Agentforce for Revenue Management Bridge", description: "Strategic bridge from CPQ+ constraints to modern AI-driven quoting and renewal workflows.", location: "Agentforce", pageTitle: "Agentforce", pageHref: "agentforce.html" },
  { code: "D360", name: "Data 360 Context Fabric", description: "Zero-copy unification of Salesforce, SAP, and telemetry context for grounded agent decisions.", location: "Data 360", pageTitle: "Data 360", pageHref: "data-360.html" },
  { code: "H360", name: "Headless 360 Omnichannel Delivery", description: "Expose Salesforce intelligence to non-Salesforce channels with governed execution and no duplicated backend sprawl.", location: "Headless 360", pageTitle: "Headless 360", pageHref: "headless-360.html" },
  { code: "MCP", name: "MCP Context Access Pattern", description: "Model Context Protocol access pattern for support portal and external surfaces requiring Salesforce and SAP context.", location: "Headless 360", pageTitle: "Headless 360", pageHref: "headless-360.html" },
  { code: "OBS", name: "Observability and Control Plane", description: "Agentic monitoring, quality scoring, and governance telemetry for build-test-deploy-observe-operate cycles.", location: "Observability", pageTitle: "Observability", pageHref: "observability.html" },
  { code: "REN", name: "Renewals Agent", description: "Internal and external assistant for renewal risk, intervention recommendations, and expansion orchestration.", location: "Operating Model", pageTitle: "Operating Model", pageHref: "operating-model.html" },
  { code: "QOT", name: "Quoting Agent", description: "Internal quoting accelerator aligned to Agentforce for Revenue Management capabilities.", location: "Operating Model", pageTitle: "Operating Model", pageHref: "operating-model.html" },
  { code: "TCA", name: "Trade Compliance Agent", description: "Internal compliance assistant that combines SAP and third-party trade signals for export and tariff-aware guidance.", location: "Operating Model", pageTitle: "Operating Model", pageHref: "operating-model.html" },
  { code: "COW", name: "Agentforce Coworker Summary Agent", description: "Summarization and preparation layer surfaced in Salesforce and Microsoft Teams channels.", location: "Operating Model", pageTitle: "Operating Model", pageHref: "operating-model.html" },
  { code: "VIB", name: "Vibe Coding Delivery Acceleration", description: "Developer acceleration using Vibes and Claude Code to speed Salesforce configuration and implementation cycles.", location: "Operating Model", pageTitle: "Operating Model", pageHref: "operating-model.html" },
  { code: "COE", name: "Salesforce AI Center of Excellence", description: "Cross-functional governance and delivery model spanning support, security, development, testing, and IT strategy.", location: "Operating Model", pageTitle: "Operating Model", pageHref: "operating-model.html" }
];

function initSite() {
  initNav();
  initSearch();
}

function initNav() {
  const navRoot = document.getElementById("nav-groups");
  if (!navRoot) return;
  const current = window.location.pathname.split("/").pop() || "index.html";

  NAV_SECTIONS.forEach((section) => {
    const group = document.createElement("div");
    group.className = "nav-group";
    group.innerHTML = `<p class="nav-title">${section.title}</p>`;
    section.links.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.href;
      a.className = "nav-link";
      if (current === link.href) a.classList.add("active");
      a.textContent = link.label;
      group.appendChild(a);
    });
    navRoot.appendChild(group);
  });

  const toggle = document.getElementById("nav-toggle");
  if (!toggle) return;
  const saved = localStorage.getItem("afw-nav-collapsed");
  if (saved === "1") document.body.classList.add("nav-collapsed");
  syncToggle(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-collapsed");
    const collapsed = document.body.classList.contains("nav-collapsed");
    localStorage.setItem("afw-nav-collapsed", collapsed ? "1" : "0");
    syncToggle(toggle);
  });
}

function syncToggle(toggle) {
  const collapsed = document.body.classList.contains("nav-collapsed");
  toggle.textContent = collapsed ? "Show Navigation" : "Hide Navigation";
  toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
  toggle.setAttribute("aria-label", collapsed ? "Show navigation sidebar" : "Hide navigation sidebar");
}

function initSearch() {
  const shell = document.getElementById("capability-search-shell");
  const input = document.getElementById("capability-search-input");
  const card = document.getElementById("capability-search-card");
  const results = document.getElementById("capability-search-results");
  if (!shell || !input || !card || !results) return;

  let filtered = [];
  let activeIndex = -1;

  function openCard() { card.classList.add("is-open"); }
  function closeCard() { card.classList.remove("is-open"); }

  function matches(item, q) {
    const text = [item.code, item.name, item.description, item.location, item.pageTitle].join(" ").toLowerCase();
    return text.includes(q);
  }

  function render(items) {
    if (items.length === 0) {
      results.innerHTML = "<div class=\"search-result\"><h4>No matches</h4><p>Try broader keywords like agent, data, support, or governance.</p></div>";
      return;
    }
    results.innerHTML = items.map((item, i) => {
      const active = i === activeIndex ? " is-active" : "";
      return `<div class="search-result${active}" data-index="${i}">
        <code>${item.code}</code>
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <small>${item.location} · ${item.pageTitle}</small>
      </div>`;
    }).join("");
  }

  function run() {
    const q = input.value.trim().toLowerCase();
    filtered = !q ? SEARCH_INDEX.slice(0, 10) : SEARCH_INDEX.filter((item) => matches(item, q)).slice(0, 12);
    activeIndex = filtered.length > 0 ? 0 : -1;
    render(filtered);
    openCard();
  }

  function go(item) {
    if (!item) return;
    window.location.href = item.pageHref;
  }

  input.addEventListener("focus", run);
  input.addEventListener("input", run);
  input.addEventListener("keydown", (event) => {
    if (!card.classList.contains("is-open")) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (filtered.length === 0) return;
      activeIndex = (activeIndex + 1) % filtered.length;
      render(filtered);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (filtered.length === 0) return;
      activeIndex = (activeIndex - 1 + filtered.length) % filtered.length;
      render(filtered);
    } else if (event.key === "Enter") {
      event.preventDefault();
      go(filtered[activeIndex]);
    } else if (event.key === "Escape") {
      closeCard();
    }
  });

  results.addEventListener("click", (event) => {
    const el = event.target.closest(".search-result");
    if (!el) return;
    const idx = Number(el.getAttribute("data-index"));
    go(filtered[idx]);
  });

  document.addEventListener("click", (event) => {
    if (!shell.contains(event.target)) closeCard();
  });
}

document.addEventListener("DOMContentLoaded", initSite);
