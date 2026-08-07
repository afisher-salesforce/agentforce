import heroDISW from "@assets/hero-disw_2.png";

export const navSections = [
  {
    title: "Overview",
    links: [
      { path: "/", label: "Executive Summary" },
      { path: "/genai-divide", label: "Crossing the GenAI Divide" },
    ],
  },
  {
    title: "Vignettes",
    links: [
      { path: "/embedded-ai", label: "Embedded AI" },
      { path: "/agentforce", label: "Agentforce" },
      { path: "/data-360", label: "Data 360" },
      { path: "/headless-360", label: "Headless 360" },
      { path: "/observability", label: "Observability" },
    ],
  },
  {
    title: "Architecture",
    links: [
      { path: "/capability-map", label: "Capability Map & Sequencing" },
      { path: "/operating-model", label: "Operating Model & Next Steps" },
    ],
  },
  {
    title: "Appendix",
    links: [
      { path: "/external-research", label: "External Research" },
      { path: "/forward-looking-statement", label: "Forward Looking Statement" },
    ],
  },
];

export const routeOrder = navSections.flatMap((s) => s.links.map((l) => l.path));

export const searchIndex = [
  { code: "EAI", name: "Embedded AI Productivity Layer", description: "Embedded assistants in Salesforce workflows reduce repetitive execution and improve speed of guided decisions.", location: "Embedded AI", path: "/embedded-ai" },
  { code: "AFR", name: "Agentforce Runtime and Guardrails", description: "Agentforce with topics, actions, and trust controls enables deployable enterprise agents for IT-managed operations.", location: "Agentforce", path: "/agentforce" },
  { code: "ARM", name: "Agentforce for Revenue Management Bridge", description: "Strategic bridge from CPQ+ constraints to modern AI-driven quoting and renewal workflows.", location: "Agentforce", path: "/agentforce" },
  { code: "D360", name: "Data 360 Context Fabric", description: "Zero-copy unification of Salesforce, SAP, and telemetry context for grounded agent decisions.", location: "Data 360", path: "/data-360" },
  { code: "H360", name: "Headless 360 Omnichannel Delivery", description: "Expose Salesforce intelligence to non-Salesforce channels with governed execution.", location: "Headless 360", path: "/headless-360" },
  { code: "MCP", name: "MCP Context Access Pattern", description: "Model Context Protocol access pattern for support portal and external surfaces requiring Salesforce and SAP context.", location: "Headless 360", path: "/headless-360" },
  { code: "OBS", name: "Observability and Control Plane", description: "Agentic monitoring, quality scoring, and governance telemetry for build-test-deploy-observe-operate cycles.", location: "Observability", path: "/observability" },
  { code: "REN", name: "Renewals Agent", description: "Internal and external assistant for renewal risk, intervention recommendations, and expansion orchestration.", location: "Operating Model", path: "/operating-model" },
  { code: "QOT", name: "Quoting Agent", description: "Internal quoting accelerator aligned to Agentforce for Revenue Management capabilities.", location: "Operating Model", path: "/operating-model" },
  { code: "TCA", name: "Trade Compliance Agent", description: "Internal compliance assistant combining SAP and third-party trade signals for export and tariff-aware guidance.", location: "Operating Model", path: "/operating-model" },
  { code: "COE", name: "Salesforce AI Center of Excellence", description: "Cross-functional governance and delivery model spanning support, security, development, testing, and IT strategy.", location: "Operating Model", path: "/operating-model" },
  { code: "GAD", name: "GenAI Divide Strategic Framework", description: "Framework for moving from pilot activity to measurable P&L outcomes through process-specific, learning-capable implementation.", location: "Crossing the GenAI Divide", path: "/genai-divide" },
];

export const pages = {
  "/": {
    pill: "Executive Enablement",
    title: "Agentic AI for Siemens DISW: From Strategy to Scaled Execution",
    subhead:
      "This workshop is designed to expose Siemens Digital Industries Software IT leaders to Salesforce AI capabilities beyond CPQ+, including Vibe Coding, Agentforce, Data 360, Agent Fabric, Headless 360, and Observability in a single enterprise delivery motion.",
    hero: heroDISW,
    sections: [
      {
        title: "Purpose and Outcomes",
        cards: [
          {
            title: "Executive Purpose",
            body: "Show how DISW can accelerate from idea to production using Salesforce-native AI capabilities with enterprise-grade governance and delivery controls.",
          },
          {
            title: "Executive Enablement - Session Outcome",
            body: "Align on immediate next steps for enablement, execution, and a Center of Excellence that improves consumption and business impact under the Siemens SELA.",
          },
        ],
      },
      {
        title: "What Must Be True at Session End",
        bullets: [
          "IT leadership understands Salesforce AI capabilities, including build and governance implications.",
          "Leaders understand where Vibe Coding and Agentforce can accelerate time-to-value in current initiatives.",
          "DISW identifies candidate business workflows for rapid AI whiteboarding and pilot design.",
        ],
      },
      {
        title: "Executive Stakes by Persona",
        bullets: [
          "IT Strategy: show measurable business outcomes and platform-level governance confidence.",
          "Security: define control points for A2A and MCP access to operational systems.",
          "Application Support: improve containment, response consistency, and service quality at scale.",
          "Development and Testing: reduce build cycle time while preserving quality and release discipline.",
        ],
      },
      {
        title: "Current State, Friction Points, and Constraints",
        subhead:
          "The architecture and organizational baseline creates both urgency and opportunity for a more unified AI operating model anchored on Salesforce.",
      },
      {
        title: "Primary Pain Points",
        bullets: [
          "Current team structures are not yet optimized to deliver Salesforce AI at speed and enterprise scale.",
          "Most AI stakeholders do not have a clear definition of what tools to use when and how they can work together.",
        ],
      },
      {
        title: "Architecture and Delivery Reality",
        bullets: [
          "Multiple Salesforce orgs increase integration and governance complexity.",
          "Data needed to hydrate agents is scattered across the DISW landscape.",
          "There is currently no overarching governance across all AI agents being created.",
        ],
      },
      {
        title: "Strategic Constraints",
        bullets: [
          "Competing platforms shape stakeholder expectations (Teams, Copilot, SAP, open-source AI initiatives).",
          "Buy-vs-build concerns include services cost, internal capability development, and speed-to-market pressure.",
          "No formal Salesforce Center of Excellence currently standardizes best practices and reusable delivery patterns.",
        ],
      },
    ],
  },

  "/genai-divide": {
    pill: "Strategic Signal",
    title: "Crossing the GenAI Divide: From Pilots to P&L Impact",
    subhead:
      "Enterprise GenAI investment is substantial, but measurable outcomes remain concentrated in a small minority. The key differentiator is implementation approach, process integration, and learning-loop design.",
    citation: {
      label: "The GenAI Divide: State of AI in Business 2025",
      href: "https://nanda.media.mit.edu/ai-pulse/reports/GenAI-Divide-Report-2025.pdf",
    },
    sections: [
      {
        title: "Executive Snapshot",
        cards: [
          {
            title: "Market Reality",
            body: "Despite significant enterprise investment, most integrated GenAI pilots still show no measurable financial return.",
          },
          {
            title: "The Divide",
            body: "A small group is extracting million-dollar outcomes, while most organizations remain pilot-heavy and production-light.",
          },
        ],
      },
      {
        title: "What the Data Indicates",
        bullets: [
          "95% of organizations report no measurable P&L impact from integrated GenAI pilots.",
          "5% are generating multi-million-dollar value from targeted implementations.",
          "80%+ explored general productivity tools, yet many outcomes remain individual-efficiency oriented instead of enterprise-financial.",
          "Most enterprise-system evaluations fail to reach production due to brittle workflows and weak operational fit.",
        ],
      },
      {
        title: "Four Patterns Behind the Divide",
        bullets: [
          "Limited disruption: structural transformation is concentrated in only a few sectors.",
          "Enterprise paradox: large firms lead in pilots but lag in repeatable scale-up.",
          "Investment bias: spending favors visible top-line use cases over high-ROI back-office processes.",
          "Implementation advantage: external partnership-led execution reports materially higher success rates than internal-only builds.",
        ],
      },
      {
        title: "Root Cause",
        bullets: [
          "The principal scaling barrier is learning behavior. Systems that do not retain feedback, adapt to context, and improve over time fail to create durable business outcomes.",
        ],
      },
      {
        title: "DISW Implications",
        bullets: [
          "Prioritize process-specific use cases with baseline metrics, measurable outcomes, and governance owners.",
          "Use architecture that integrates with existing workflows and operational systems instead of isolated assistants.",
          "Evaluate success using retention, conversion, cycle-time, and cost-to-serve outcomes rather than software benchmarks.",
        ],
      },
      {
        title: "Action Principles for Crossing the Divide",
        bullets: [
          "Target workflows with operational pain and direct business accountability.",
          "Pair enablement with observability to create measurable learning loops from day one.",
          "Scale through COE-led standards for architecture, testing, and policy guardrails.",
        ],
      },
    ],
  },

  "/embedded-ai": {
    pill: "Domain 01",
    title: "Embedded AI",
    subhead:
      "Embed AI into existing Salesforce workflows to create immediate, low-friction productivity gains with clear IT oversight and policy control.",
    sections: [
      {
        title: "Executive Discussion Focus",
        bullets: [
          "Reduce repetitive work across support and operations with guided copilots.",
          "Standardize recommendations while preserving human decision authority for sensitive actions.",
          "Build confidence through prompt governance and repeatable release controls.",
        ],
      },
      {
        title: "Potential DISW Fit",
        bullets: [
          "Support case triage and summary generation.",
          "Internal preparation and handoff copilots for service and revenue teams.",
        ],
      },
      {
        title: "Trailhead Resources (Public)",
        subhead:
          "Curated public learning paths to help teams operationalize embedded AI capabilities inside existing Salesforce workflows.",
        trailhead: [
          {
            title: "Get Started with Prompts and Prompt Builder",
            description: "Build practical prompt design foundations for governed business usage.",
            meta: "Trail · 80 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/get-started-with-prompts-and-prompt-studio",
          },
          {
            title: "Take a Tour of the New Agentforce Builder",
            description: "Explore modern builder capabilities for rapid AI experience design.",
            meta: "Trail · 50 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/get-ready-for-the-new-agentforce-builder",
          },
          {
            title: "Get Smart with Salesforce Einstein",
            description: "Executive-friendly overview of AI patterns and CRM impact opportunities.",
            meta: "Trail · 75 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/get_smart_einstein",
          },
          {
            title: "Agentforce Vibes IDE Fundamentals",
            description: "Understand pro-code acceleration fundamentals for builder productivity.",
            meta: "Module · 25 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/agentforce-vibes-ide-fundamentals",
          },
        ],
      },
    ],
  },

  "/agentforce": {
    pill: "Domain 02",
    title: "Agentforce",
    subhead:
      "Move from isolated pilots to governed production agents by combining natural-language development acceleration with enterprise controls.",
    sections: [
      {
        title: "Executive Discussion Focus",
        bullets: [
          "Show concept-to-deployment flow: Vibe Coding to Agentforce runtime with trust controls.",
          "Reframe development value toward architecture and orchestration, not manual boilerplate.",
          "Prioritize use cases needing reasoning across multiple systems and ambiguous inputs.",
        ],
      },
      {
        title: "CPQ+ Bridge Strategy",
        bullets: [
          "CPQ+ constraints limit native agentic extensibility.",
          "Agentforce for Revenue Management pilot is the modernization path for internal quoting agents.",
          "Use this bridge to increase SELA value realization instead of defending legacy boundaries.",
        ],
      },
      {
        title: "Trailhead Resources (Public)",
        subhead:
          "Curated enablement links grounded in current Trailhead search results to accelerate Agentforce readiness for DISW IT builders and architects.",
        trailhead: [
          {
            title: "Build Agentforce Solutions with Pro-Code Tools",
            description: "Comprehensive path for developing, testing, and deploying production Agentforce solutions.",
            meta: "Trail · 1130 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/build-agentforce-solutions-with-pro-code-tools",
          },
          {
            title: "Agent Customization with Apex",
            description: "Practical module on creating custom agent actions and extending behavior with Apex.",
            meta: "Module · 30 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/agent-customization-with-apex",
          },
          {
            title: "Build an Agent Using Agentforce DX",
            description: "Hands-on project for creating and deploying a custom AI agent with pro-code tools.",
            meta: "Project · 35 min",
            href: "https://trailhead.salesforce.com/en/content/learn/projects/create-an-agent-using-pro-code-tools",
          },
          {
            title: "Apex Testing",
            description: "Core unit testing practices to improve reliability, deployment quality, and production confidence.",
            meta: "Module · 135 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/apex_testing",
          },
        ],
      },
    ],
  },

  "/data-360": {
    pill: "Domain 03",
    title: "Data 360",
    subhead:
      "Create a unified context fabric across Salesforce orgs, SAP, and telemetry sources so every agent decision is grounded, explainable, and actionable.",
    sections: [
      {
        title: "Executive Discussion Focus",
        bullets: [
          "Improve answer quality and escalation decisions with cross-system context.",
          "Use zero-copy patterns to reduce data duplication and integration debt.",
          "Support support-portal and renewal scenarios with a shared intelligence layer.",
        ],
      },
      {
        title: "Objection Handling",
        bullets: [
          "Address consumption concerns through value-backed use-case prioritization and unmetered capability planning where applicable.",
          "Compare against custom data-engineering alternatives on speed, governance, and long-term maintainability.",
        ],
      },
      {
        title: "Trailhead Resources (Public)",
        subhead:
          "Curated public learning paths to support Data 360 adoption, governance, and cross-cloud context strategy.",
        trailhead: [
          {
            title: "Unlock Your Data with Data Cloud",
            description: "Comprehensive path for Data Cloud foundations, unification, and activation.",
            meta: "Trail · 606 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/unlock-your-data-with-data-cloud",
          },
          {
            title: "Model Data in Data 360",
            description: "Practical modeling and mapping guidance for scalable context architecture.",
            meta: "Trail · 50 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/model-data-in-customer-data-platform",
          },
          {
            title: "Administer Data 360",
            description: "Admin-focused controls for data operations, quality, and platform readiness.",
            meta: "Trail · 110 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/administer-customer-data-platform",
          },
          {
            title: "Use Data Insights Across Salesforce",
            description: "Expand cloud use cases by activating shared customer insight across teams.",
            meta: "Trail · 50 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/use-data-insights-across-cloud",
          },
        ],
      },
    ],
  },

  "/headless-360": {
    pill: "Domain 04",
    title: "Headless 360",
    subhead:
      "Deliver Salesforce intelligence in non-Salesforce channels without creating duplicative backend platforms or weakening governance standards.",
    sections: [
      {
        title: "Executive Discussion Focus",
        bullets: [
          "Enable external support portal experiences with Agentforce and MCP context access.",
          "Support Microsoft Teams-facing coworker patterns while preserving centralized trust controls.",
          "Use Agent Fabric with MuleSoft as the integration nervous system for secure action orchestration.",
        ],
      },
      {
        title: "Strategic Positioning",
        bullets: [
          "Avoid channel wars; focus on consistent intelligence delivery across preferred user surfaces.",
          "Keep Salesforce as the governed execution engine, not just a data repository.",
        ],
      },
      {
        title: "Trailhead Resources (Public)",
        subhead:
          "Curated public learning paths to support integration architecture, API strategy, and agentic orchestration outside the core UI shell.",
        trailhead: [
          {
            title: "Build Great APIs and Integrations with MuleSoft",
            description: "Core foundations for connected architecture and API-led delivery design.",
            meta: "Trail · 60 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/great-integrations-mulesoft",
          },
          {
            title: "Explore Integration Patterns and Practices",
            description: "Pattern-based guidance for scalable and resilient enterprise integration.",
            meta: "Trail · 130 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/explore-integration-patterns-and-practices",
          },
          {
            title: "Design Event-Driven Apps for Real-Time Integration",
            description: "Apply event-driven design for real-time orchestration across systems.",
            meta: "Trail · 470 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/design-eventdriven-apps-for-realtime-integration",
          },
          {
            title: "Agentic Integration with MuleSoft Vibes",
            description: "Quick-start module for applying agentic AI concepts in integration workflows.",
            meta: "Module · 10 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/agentic-integration-with-mulesoft-vibes",
          },
        ],
      },
    ],
  },

  "/observability": {
    pill: "Domain 05",
    title: "Observability",
    subhead:
      "Create trust in production agentic systems with transparent monitoring, scoring, and operational control loops for continuous improvement.",
    sections: [
      {
        title: "Executive Discussion Focus",
        bullets: [
          "Track containment, quality, escalation, and cycle-time trends in business and IT terms.",
          "Operationalize build, test, deploy, observe, and optimize as a repeatable lifecycle.",
          "Use evidence-based telemetry to improve confidence and budget support over time.",
        ],
      },
      {
        title: "Learning Loop Imperative",
        bullets: [
          "Observability is the mechanism that converts pilot activity into learning-capable systems with sustained business value.",
          "Feedback capture and score-driven iteration should be treated as required architecture, not post-launch optimization.",
        ],
      },
      {
        title: "Why Leadership Cares",
        bullets: [
          "Observability turns AI from a leap of faith into a governed performance system.",
          "Cross-org reporting enables consistent quality expectations despite multi-org complexity.",
        ],
      },
      {
        title: "Trailhead Resources (Public)",
        subhead:
          "Curated public learning paths for monitoring, quality control, and production governance across agentic implementations.",
        trailhead: [
          {
            title: "Agent Analytics and Monitoring",
            description: "Monitor agent performance and apply data-driven improvements to outcomes.",
            meta: "Module · 30 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/agent-analytics-and-monitoring",
          },
          {
            title: "Event Monitoring Basics",
            description: "Use low-code Event Monitoring capabilities for security and operational visibility.",
            meta: "Module · 40 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/event-monitoring-basics",
          },
          {
            title: "Event Monitoring Analytics App",
            description: "Visualize event log data to track risk, usage, and performance signals.",
            meta: "Module · 45 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/event_monitoring_analytics",
          },
          {
            title: "Apex Testing",
            description: "Strengthen delivery confidence with robust unit testing and quality checks.",
            meta: "Module · 135 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/apex_testing",
          },
        ],
      },
    ],
  },

  "/capability-map": {
    pill: "Architecture",
    title: "Capability Map and Delivery Sequencing",
    subhead:
      "Organize cross-domain capabilities into a phased delivery sequence that balances value realization speed, dependency order, and operational risk.",
    sections: [
      {
        title: "Phase 1: Immediate Value and Enablement",
        bullets: [
          "Embedded AI copilots for support and internal preparation workflows.",
          "Agentforce coworker summaries in Salesforce and Teams-facing patterns.",
          "Instructor-led enablement for Vibe Coding and Claude Code across delivery roles.",
        ],
      },
      {
        title: "Phase 2: Core Agentic Workflows",
        bullets: [
          "Renewals Agent for retention and expansion orchestration.",
          "Support Agent on Headless 360 portal with Data 360 grounding.",
          "Observability baseline: interaction quality, escalation patterns, and run health.",
        ],
      },
      {
        title: "Phase 3: Strategic Differentiation",
        bullets: [
          "Quoting Agent modernization through Agentforce for Revenue Management.",
          "Trade Compliance Agent with SAP and third-party data orchestration.",
          "COE-driven governance and cross-org scale standards.",
        ],
      },
      {
        title: "Domain Mapping",
        bullets: [
          "Data and AI: Data 360, Agentforce grounding, observability metrics.",
          "Integration: Agent Fabric and MuleSoft action orchestration.",
          "Service and Revenue: support, renewals, quoting, and compliance domains.",
        ],
      },
      {
        title: "Build vs. Buy Framework",
        bullets: [
          "Favor Agentforce for use cases requiring reasoning over ambiguous inputs and multi-system context.",
          "Retain Flow, Apex, or integration code for deterministic transactional logic with strict rule execution.",
          "Use Vibe Coding and Claude Code for delivery acceleration across the full Salesforce stack.",
        ],
      },
      {
        title: "Trailhead Learning Path by Delivery Phase (Public)",
        subhead:
          "Use these curated resources to align enablement sequencing with the same phased delivery model used in the capability roadmap.",
        trailhead: [
          {
            title: "Phase 1 · Agentforce Vibes IDE Fundamentals",
            description: "Rapid builder enablement for pro-code collaboration and AI-assisted development patterns.",
            meta: "Module · 25 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/agentforce-vibes-ide-fundamentals",
          },
          {
            title: "Phase 1 · Get Started with Prompts and Prompt Builder",
            description: "Establish prompt-design fundamentals required for trusted, repeatable embedded AI usage.",
            meta: "Trail · 80 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/get-started-with-prompts-and-prompt-studio",
          },
          {
            title: "Phase 2 · Build Agentforce Solutions with Pro-Code Tools",
            description: "Deep execution path for building, testing, and deploying production-ready Agentforce solutions.",
            meta: "Trail · 1130 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/build-agentforce-solutions-with-pro-code-tools",
          },
          {
            title: "Phase 2 · Unlock Your Data with Data Cloud",
            description: "Build the unified data context needed for grounding, personalization, and cross-cloud decisions.",
            meta: "Trail · 606 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/unlock-your-data-with-data-cloud",
          },
          {
            title: "Phase 3 · Explore Integration Patterns and Practices",
            description: "Scale architecture through integration patterns that reduce complexity and improve resilience.",
            meta: "Trail · 130 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/explore-integration-patterns-and-practices",
          },
          {
            title: "Phase 3 · Agent Analytics and Monitoring",
            description: "Operationalize learning loops with agent monitoring and continuous outcome improvement.",
            meta: "Module · 30 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/agent-analytics-and-monitoring",
          },
        ],
      },
    ],
  },

  "/operating-model": {
    pill: "Architecture",
    title: "Operating Model and Next Steps",
    subhead:
      "Translate strategy into delivery momentum with a practical enablement and governance model designed for enterprise IT adoption at speed.",
    sections: [
      {
        title: "Priority Use-Case Portfolio",
        bullets: [
          "Internal Quoting Agent (Agentforce for Revenue Management path).",
          "Internal and external Renewals Agent for retention motions.",
          "Trade Compliance Agent integrating SAP and third-party trade data.",
          "External Support Agent on Headless 360 with MCP context access.",
          "Agentforce Coworker summaries surfaced in Salesforce and Teams.",
          "Vibe Coding and Claude Code delivery acceleration agents.",
        ],
      },
      {
        title: "Delivery Sequence",
        bullets: [
          "Whiteboarding workshops: identify top 2–3 high-confidence use-case pilots.",
          "Enablement cycle: instructor-led training plus Trailhead incentives.",
          "COE setup: define standards for architecture review, guardrails, and observability KPIs.",
        ],
      },
      {
        title: "Outcome Governance Standard",
        bullets: [
          "Every pilot should include baseline metrics, feedback loops, and predefined scale criteria before launch.",
          "Prioritize process fit and measurable business outcomes over model novelty or software benchmark scores.",
        ],
      },
      {
        title: "COE Enablement Plan by Phase (Public Trailhead)",
        subhead:
          "Sequence capability building across IT roles so the Center of Excellence can move from pilot support to enterprise-scale governance.",
        trailhead: [
          {
            title: "Phase 1 · Build Your Administrator Career on Salesforce",
            description: "Establish admin-led platform fluency for secure configuration and operational ownership.",
            meta: "Trail · 910 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/build-your-admin-career-on-salesforce",
          },
          {
            title: "Phase 1 · Get Started with Prompts and Prompt Builder",
            description: "Build shared prompt design and governance fundamentals across delivery teams.",
            meta: "Trail · 80 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/get-started-with-prompts-and-prompt-studio",
          },
          {
            title: "Phase 2 · Build Agentforce Solutions with Pro-Code Tools",
            description: "Enable developers and architects to deliver production-grade agent workflows faster.",
            meta: "Trail · 1130 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/build-agentforce-solutions-with-pro-code-tools",
          },
          {
            title: "Phase 2 · Unlock Your Data with Data Cloud",
            description: "Build shared data-context capabilities required for grounded, cross-cloud agent outcomes.",
            meta: "Trail · 606 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/unlock-your-data-with-data-cloud",
          },
          {
            title: "Phase 3 · Build Your Architect Career on Salesforce",
            description: "Scale architecture standards, reference patterns, and cross-org governance rigor.",
            meta: "Trail · 355 min",
            href: "https://trailhead.salesforce.com/en/content/learn/trails/salesforce-architect-careers",
          },
          {
            title: "Phase 3 · Agent Analytics and Monitoring",
            description: "Operationalize learning loops and quality controls for sustained business outcomes.",
            meta: "Module · 30 min",
            href: "https://trailhead.salesforce.com/en/content/learn/modules/agent-analytics-and-monitoring",
          },
        ],
      },
      {
        title: "Executive Call-to-Action",
        bullets: [
          "Commit to training and adoption readiness for DISW IT teams.",
          "Align on an Agentic Enterprise vision spanning security, support, dev, testing, and IT strategy.",
          "Stand up a DISW Salesforce Center of Excellence to institutionalize scale execution.",
        ],
      },
    ],
  },

  "/external-research": {
    pill: "External Research",
    title: "Siemens DISW Context and Market Signals",
    subhead:
      "External and account-level research shows DISW balancing SaaS transition, integration complexity, and AI-led growth demands, creating urgency for a governed enterprise AI operating model.",
    sections: [
      {
        title: "Scale and Transformation Drivers",
        bullets: [
          "Xcelerator-led SaaS transition is reshaping go-to-market and operating model requirements.",
          "Recent M&A activity increases cross-system data unification and process-governance pressure.",
          "AI commitments at leadership level increase demand for visible execution outcomes from IT.",
        ],
      },
      {
        title: "Competitive and Platform Dynamics",
        bullets: [
          "DISW must balance Salesforce platform acceleration with existing SAP, Microsoft, and open-source investments.",
          "Execution speed, maintainability, and governance quality are stronger decision criteria than feature parity alone.",
          "SELA commitment creates a strategic opportunity to shift from isolated pilots to scaled capability consumption.",
        ],
      },
      {
        title: "Implications for This Discussion",
        bullets: [
          "Prioritize architecture and operating model decisions over tool-by-tool comparisons.",
          "Tie every capability discussion to business value realization and measurable delivery outcomes.",
          "Align leadership around a phased path from enablement to governed production scale.",
        ],
      },
    ],
  },

  "/forward-looking-statement": {
    pill: "Appendix",
    title: "Forward Looking Statement",
    subhead: "Approved legal language is reproduced below verbatim.",
    sections: [
      {
        title: "Safe Harbor",
        legal:
          "This presentation contains forward-looking statements about, among other things, trend analyses and statements regarding future events, anticipated growth and industry prospects, and our strategies, expectation or plans regarding product releases and enhancements. The achievement or success of the matters covered by such forward-looking statements involves risks, uncertainties and assumptions. If any such risks or uncertainties materialize or if any of the assumptions prove incorrect, results or outcomes could differ materially from those expressed or implied by these forward-looking statements. The risks and uncertainties referred to above include those factors discussed in Salesforce's reports filed from time to time with the Securities and Exchange Commission, including, but not limited to our ability to meet the expectations of our customers; uncertainties regarding Al technologies and their integration into our product offerings; the effect of evolving domestic and foreign government regulations; regulatory developments and regulatory investigations involving us or affecting our industry; our ability to successfully introduce new services and product features, including related to AI and Agentforce; our ability to execute our business plans; the pace of change and innovation and our ability to compete in the markets in which we participate; and our ability to maintain and enhance our brands.",
      },
    ],
  },
};
