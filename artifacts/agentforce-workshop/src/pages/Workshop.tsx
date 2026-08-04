import React, { useEffect, useState } from 'react';
import { Menu, X, CheckCircle2 } from 'lucide-react';
import heroDISW from "@assets/hero-disw.png";

type TopicZone = {
  heading: string;
  items: string[];
};

type Card = {
  title: string;
  body: string;
};

type Section = {
  id: string;
  pill: string;
  heading: string;
  subhead: string;
  isHero?: boolean;
  cards?: Card[];
  topics: TopicZone[];
};

const sections: Section[] = [
  {
    id: "executive-summary",
    pill: "Executive Enablement",
    heading: "Agentic AI for Siemens DISW: From Strategy to Scaled Execution",
    subhead:
      "This workshop is designed to expose Siemens Digital Industries Software IT leaders to Salesforce AI capabilities beyond CPQ+, including Vibe Coding, Agentforce, Data 360, Agent Fabric, Headless 360, and Observability in a single enterprise delivery motion.",
    isHero: true,
    cards: [
      {
        title: "Executive Purpose",
        body: "Demonstrate how DISW can accelerate from idea to production by combining Salesforce-native AI capabilities with governance, security, and architecture patterns that enterprise IT can trust.",
      },
      {
        title: "Session Outcome",
        body: "Align on immediate next steps for whiteboarding, enablement, and a Center of Excellence that improves consumption and business impact under the Siemens SELA.",
      },
    ],
    topics: [],
  },
  {
    id: "success-criteria",
    pill: "Executive Alignment",
    heading: "Session Success Criteria",
    subhead:
      "Success is not just awareness of features. Success is IT leadership consensus on how to operationalize Salesforce AI as a delivery system across support, development, and strategy teams.",
    topics: [
      {
        heading: "What Must Be True at the End of the Meeting",
        items: [
          "IT leadership understands Salesforce AI capabilities beyond CPQ+, including build and governance implications.",
          "Leaders agree on where Vibe Coding and Agentforce can accelerate time-to-value in current initiatives.",
          "DISW identifies candidate business workflows for rapid AI whiteboarding and pilot design.",
          "Stakeholders align on a practical enablement sequence: whiteboard, train, pilot, govern, scale.",
        ],
      },
    ],
  },
  {
    id: "current-state",
    pill: "DISW Baseline",
    heading: "Current State, Friction Points, and Constraints",
    subhead:
      "The architecture and organizational baseline creates both urgency and opportunity for a more unified AI operating model anchored on Salesforce.",
    topics: [
      {
        heading: "Primary Pain Points",
        items: [
          "Current team structures are not yet optimized to deliver Salesforce AI at speed and enterprise scale.",
          "SELA breadth is under-consumed despite Agentforce expansion and strategic platform commitment.",
          "Most stakeholders still view Salesforce primarily through the CPQ+ lens, limiting platform-wide AI adoption.",
        ],
      },
      {
        heading: "Architecture and Delivery Reality",
        items: [
          "Multiple Salesforce orgs increase integration and governance complexity.",
          "CPQ+ is implemented, while Agentforce for Revenue Management is entering pilot evaluation.",
          "CPQ+ constraints limit direct agentic extensibility, reinforcing the need for a broader Salesforce AI pattern.",
        ],
      },
      {
        heading: "Strategic Constraints",
        items: [
          "Competing platforms shape stakeholder expectations (Teams, Copilot, SAP, open-source AI initiatives).",
          "Buy-vs-build concerns include services cost, internal capability development, and speed-to-market pressure.",
          "No formal Salesforce Center of Excellence currently standardizes best practices and reusable delivery patterns.",
        ],
      },
    ],
  },
  {
    id: "external-research",
    pill: "External Research",
    heading: "Siemens DISW Context and Alignment Signals",
    subhead:
      "Public and account-level research indicates DISW is balancing SaaS transition, post-M&A integration, and AI-led growth targets—creating strong demand for governed automation and unified data context.",
    topics: [
      {
        heading: "Business and Transformation Signals",
        items: [
          "DISW is transitioning from perpetual licensing toward SaaS/subscription under Xcelerator.",
          "Recent Altair and Dotmatics integrations increase urgency for customer data unification.",
          "Digital business growth and AI investment are high, but margin and complexity pressures remain.",
          "IT leadership is focused on platform governance, rationalization, and faster value realization.",
        ],
      },
      {
        heading: "Implications for the Session",
        items: [
          "Anchor the discussion in architecture and operating model decisions, not isolated feature demos.",
          "Frame Salesforce AI as the path to execution speed within an already-approved global platform commitment.",
          "Position measurable progress around use-case adoption and capability consumption rather than customer-specific metrics.",
        ],
      },
    ],
  },
  {
    id: "embedded-ai",
    pill: "Domain 01",
    heading: "Embedded AI",
    subhead:
      "Embedded AI is the lowest-friction path to visible value because it augments existing workflows inside the systems where DISW teams already operate.",
    topics: [
      {
        heading: "Executive Discussion Focus",
        items: [
          "Use embedded copilots to reduce repetitive work in support, testing, and internal operational handoffs.",
          "Standardize knowledge and recommendations while preserving human review for high-risk decisions.",
          "Establish prompt and guardrail governance as a reusable IT capability, not team-by-team improvisation.",
        ],
      },
      {
        heading: "Why IT Leaders Should Care",
        items: [
          "Fastest path to early wins and stakeholder trust without requiring immediate large-scale replatforming.",
          "Creates internal momentum for larger Agentforce and Data 360 initiatives.",
        ],
      },
    ],
  },
  {
    id: "agentforce",
    pill: "Domain 02",
    heading: "Agentforce",
    subhead:
      "Agentforce operationalizes agentic workflows with enterprise controls, enabling DISW to move from experimentation to repeatable production deployment.",
    topics: [
      {
        heading: "Executive Discussion Focus",
        items: [
          "Show the journey from Vibe Coding prompt to deployable agent using Agentforce Labs and governance controls.",
          "Reframe developer value: less boilerplate, more architecture, orchestration, and policy design.",
          "Prioritize use cases where reasoning, context synthesis, and conversational interfaces outperform static automation.",
        ],
      },
      {
        heading: "CPQ+ Context for DISW",
        items: [
          "Acknowledge CPQ+ limitations for native agentic extensibility and API flexibility.",
          "Position Agentforce for Revenue Management pilot as the strategic bridge to modern quoting AI capabilities.",
          "Tie urgency to SELA consumption and value realization rather than product replacement rhetoric.",
        ],
      },
    ],
  },
  {
    id: "data-360",
    pill: "Domain 03",
    heading: "Data 360",
    subhead:
      "Data 360 provides the unified context fabric for grounded AI decisions across Salesforce and external systems, including SAP, product telemetry, and multi-org Salesforce footprints.",
    topics: [
      {
        heading: "Executive Discussion Focus",
        items: [
          "Ground agent outputs in current customer, entitlement, and adoption context—not disconnected data snapshots.",
          "Support zero-copy patterns to avoid unnecessary replication and new data-silo creation.",
          "Improve trust and actionability by unifying context before inference, automation, and escalation decisions.",
        ],
      },
      {
        heading: "Objection Handling",
        items: [
          "Address uncertainty on Data 360 consumption by clarifying unmetered access alignment in current licensing constructs.",
          "Compare to custom data engineering alternatives on speed, governance, and long-term maintenance burden.",
        ],
      },
    ],
  },
  {
    id: "headless-360",
    pill: "Domain 04",
    heading: "Headless 360",
    subhead:
      "Headless 360 enables Salesforce capabilities on non-Salesforce digital surfaces, turning portals and apps into governed AI engagement channels without duplicative backend sprawl.",
    topics: [
      {
        heading: "Executive Discussion Focus",
        items: [
          "Deliver AI experiences in DISW-preferred interfaces while retaining Salesforce trust and governance controls.",
          "Reduce integration and maintenance overhead from custom middleware-heavy patterns.",
          "Support decoupled front-end innovation while centralizing execution, data policy, and governance.",
        ],
      },
      {
        heading: "Competitive Context",
        items: [
          "Do not force a Teams-vs-Salesforce debate; show how Salesforce can execute intelligence across heterogeneous channels.",
          "Position Agent Fabric with MuleSoft as the integration nervous system for secure external actions.",
        ],
      },
    ],
  },
  {
    id: "observability",
    pill: "Domain 05",
    heading: "Observability",
    subhead:
      "Observability is the control layer that makes agentic systems production-ready by exposing health, quality, escalation patterns, and improvement opportunities over time.",
    topics: [
      {
        heading: "Executive Discussion Focus",
        items: [
          "Track outcomes with business and IT metrics: containment, escalation, quality, and cycle time.",
          "Operationalize an agentic DevOps lifecycle: build, test, deploy, observe, and optimize.",
          "Build leadership confidence with transparent governance and continuous quality scoring.",
        ],
      },
      {
        heading: "Leadership Relevance",
        items: [
          "Observability gives IT strategy leaders a concrete way to prove AI value and manage risk over time.",
          "Supports governance reporting required for cross-org scaling and enterprise confidence.",
        ],
      },
    ],
  },
  {
    id: "decision-framework",
    pill: "Decision Framework",
    heading: "Build vs Buy and Delivery Governance",
    subhead:
      "The goal is pragmatic architecture choice per use case, not ideology. Use Salesforce-native capabilities where they create speed, governance, and maintainability advantages.",
    topics: [
      {
        heading: "When to Favor Agentforce",
        items: [
          "Use cases require reasoning over ambiguous inputs and multi-system context.",
          "Business users need conversational interaction and explainable recommendations.",
          "IT needs governed iteration speed without rebuilding security and trust controls from scratch.",
        ],
      },
      {
        heading: "When to Favor Traditional Patterns",
        items: [
          "Deterministic transactional logic with strict rule execution may remain in Flow, Apex, or integration code.",
          "High-throughput backend processing without conversational requirements may not require an agentic interface.",
        ],
      },
      {
        heading: "Known Objections to Address in the Room",
        items: [
          "No Salesforce AI Center of Excellence today: solve with phased governance model, not ad hoc project delivery.",
          "No time to develop resources: use instructor-led enablement plus role-based learning paths.",
          "Services cost concerns: focus on targeted co-delivery to establish reusable internal accelerators.",
        ],
      },
      {
        heading: "Audience-Specific Stakes",
        items: [
          "Execution confidence: teams need a repeatable knowledge-acquisition model for a platform with three major releases per year.",
          "Value confidence: consumption-model concerns should be reframed around operating expense reduction and growth impact.",
          "Security confidence: IT leaders need controls for A2A and MCP interactions across Salesforce and external operational systems.",
          "Platform confidence: Salesforce must be positioned as an intelligence and execution layer, not a commoditized data store.",
        ],
      },
    ],
  },
  {
    id: "operating-model",
    pill: "Execution Path",
    heading: "Operating Model and Immediate Next Steps",
    subhead:
      "A practical sequence to convert leadership alignment into measurable execution against business priorities.",
    topics: [
      {
        heading: "Phase 1: Whiteboarding and Use-Case Prioritization",
        items: [
          "Run targeted architecture whiteboarding across prioritized Sales and Service scenarios.",
          "Select 2-3 high-confidence scenarios for rapid pilot design and governance review.",
          "Candidate scenarios: Renewals Agent, Support Agent for Headless 360 portal, and Agentforce Coworker for seller and support productivity.",
        ],
      },
      {
        heading: "Phase 2: Skills Uplift and Delivery Readiness",
        items: [
          "Launch instructor-led enablement for IT leaders and practitioner teams.",
          "Incentivize Trailhead completion tied to role-specific adoption outcomes.",
          "Include Vibe Coding and Claude Code enablement to accelerate delivery across the full Salesforce stack, not only AI workloads.",
        ],
      },
      {
        heading: "Phase 3: Salesforce AI Center of Excellence",
        items: [
          "Define cross-functional COE charter spanning support, security, development, testing, and IT strategy.",
          "Establish standards for architecture reviews, guardrails, prompt governance, and observability KPIs.",
          "Create a repeatable scale pattern across multiple orgs while preserving local execution velocity.",
        ],
      },
      {
        heading: "Priority Use-Case Portfolio for DISW",
        items: [
          "Internal Quoting Agent using Agentforce for Revenue Management capabilities.",
          "Internal and external Renewals Agent for proactive retention and expansion orchestration.",
          "Trade Compliance Agent integrating SAP and third-party sources for export controls and tariff-aware recommendations.",
          "External Support Agent on Headless 360 with MCP access patterns for Salesforce and SAP context via Data 360.",
          "Agentforce Coworker summaries in Salesforce and Microsoft Teams surfaces through Headless 360 delivery patterns.",
          "Development acceleration agents using Agentforce Vibes and Claude Code for faster Salesforce configuration and engineering cycles.",
        ],
      },
      {
        heading: "Executive Call-to-Action",
        items: [
          "Commit to a formal training and enablement program for DISW IT leaders and delivery teams.",
          "Align on an Agentic Enterprise vision sponsored by IT strategy and business stakeholders.",
          "Stand up a DISW Salesforce Center of Excellence to institutionalize standards, governance, and scale execution.",
        ],
      },
    ],
  },
];

const navLinks = [
  { id: "executive-summary", label: "Executive Summary" },
  { id: "success-criteria", label: "Success Criteria" },
  { id: "current-state", label: "Current State" },
  { id: "external-research", label: "External Research" },
  { id: "embedded-ai", label: "Embedded AI" },
  { id: "agentforce", label: "Agentforce" },
  { id: "data-360", label: "Data 360" },
  { id: "headless-360", label: "Headless 360" },
  { id: "observability", label: "Observability" },
  { id: "decision-framework", label: "Decision Framework" },
  { id: "operating-model", label: "Operating Model & Next Steps" },
];

export default function Workshop() {
  const [activeSection, setActiveSection] = useState<string>("executive-summary");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let intersectingId: string | null = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingId = entry.target.id;
          }
        });
        if (intersectingId) {
          setActiveSection(intersectingId);
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -40;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-transparent w-full font-sans selection:bg-accent/30 selection:text-white">
      {/* Mobile Top Nav */}
      <div className="lg:hidden fixed top-0 w-full h-16 border-b border-border bg-background/95 backdrop-blur z-50 flex items-center justify-between px-6">
        <div>
          <h1 className="font-semibold text-base text-foreground tracking-tight">Agentforce Workshop</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Siemens DISW</p>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-40 w-[290px] border-r border-border bg-sidebar/95 backdrop-blur
          transition-transform duration-300 ease-in-out lg:translate-x-0 pt-20 lg:pt-0
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="h-full flex flex-col p-6 overflow-y-auto">
          {/* Brand */}
          <div className="hidden lg:block mb-8 border border-border rounded-xl bg-gradient-to-br from-card to-background p-4">
            <h1 className="font-semibold text-base text-foreground tracking-tight leading-tight">
              Agentforce Workshop
            </h1>
            <p className="text-xs text-muted-foreground mt-1 leading-snug">
              Siemens DISW IT Leadership Executive Discussion
            </p>
          </div>

          {/* Briefing Pages Nav */}
          <nav className="flex-1 mb-6">
            <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-4">
              Briefing Pages
            </h3>
            <ul className="space-y-0.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    data-testid={`nav-link-${link.id}`}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200
                      ${
                        activeSection === link.id
                          ? "bg-accent/15 text-accent shadow-[inset_0_0_0_1px_rgba(0,183,183,0.2)]"
                          : "text-muted-foreground hover:bg-accent/5 hover:text-foreground"
                      }
                    `}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Discussion Goal */}
          <div className="border-t border-border pt-5">
            <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-3">
              Discussion Goal
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Expose DISW IT leadership to Salesforce AI depth beyond CPQ+ and align on a practical path
              to accelerate time-to-value with governed delivery at enterprise scale.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-[290px] pt-16 lg:pt-0">

        {/* Sections */}
        <div className="p-4 md:p-8 lg:p-12 space-y-6">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              data-testid={`section-${section.id}`}
              className="scroll-mt-24 rounded-2xl border border-border overflow-hidden shadow-xl shadow-black/40"
            >
              {/* Hero variant: first section has the background image + cards */}
              {section.isHero ? (
                <>
                  <div
                    className="relative min-h-[340px] flex flex-col justify-end bg-cover bg-center"
                    style={{ backgroundImage: `url(${heroDISW})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-black/15" />
                    <div className="relative z-10 p-8 md:p-12">
                      <span className="inline-flex items-center px-3 py-1 rounded-full border border-accent/50 bg-accent/15 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
                        {section.pill}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-[1.15] max-w-3xl">
                        {section.heading}
                      </h2>
                      <p className="text-base md:text-lg text-white/70 max-w-3xl leading-relaxed">
                        {section.subhead}
                      </p>
                    </div>
                  </div>
                  {section.cards && section.cards.length > 0 && (
                    <div className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/20 border-t border-border/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {section.cards.map((card, idx) => (
                          <div
                            key={idx}
                            className="rounded-xl border border-border bg-background/50 p-6"
                            data-testid={`card-${section.id}-${idx}`}
                          >
                            <h3 className="text-sm font-semibold text-foreground mb-3 tracking-tight">
                              {card.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Standard variant: pill + heading + subhead */}
                  <div className="p-8 md:p-12 bg-gradient-to-br from-card/80 to-card/30 border-b border-border/50">
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-accent/50 bg-accent/15 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6 shadow-[0_0_12px_rgba(0,183,183,0.2)]">
                      {section.pill}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                      {section.heading}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-3xl">
                      {section.subhead}
                    </p>
                  </div>

                  {/* Topic zones */}
                  {section.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className={`p-8 md:p-12 bg-black/20 ${tIdx < section.topics.length - 1 ? "border-b border-border/40" : ""}`}
                    >
                      <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-foreground/70 mb-6 flex items-center gap-3">
                        <span className="h-px w-6 bg-accent/40 flex-shrink-0" />
                        {topic.heading}
                      </h3>
                      <ul className="space-y-4">
                        {topic.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-4" data-testid={`item-${section.id}-${tIdx}-${iIdx}`}>
                            <div className="mt-0.5 flex-shrink-0 bg-accent/10 p-1 rounded-full">
                              <CheckCircle2 size={15} className="text-accent" />
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              )}
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="py-10 md:py-14 text-center border-t border-border mt-2 bg-black/10">
          <p className="text-xs text-muted-foreground font-medium px-6">
            Prepared for Siemens DISW IT Leadership discussion
            <span className="mx-2 opacity-40">·</span>
            Agentforce Workshop
            <span className="mx-2 opacity-40">·</span>
            Updated for Aug 12 executive enablement
          </p>
        </footer>
      </main>
    </div>
  );
}
