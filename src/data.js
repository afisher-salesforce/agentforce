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

export const routeOrder = navSections.flatMap((section) => section.links.map((link) => link.path));

export const searchIndex = [
  { code: "EAI", name: "Embedded AI Productivity Layer", description: "Embedded assistants in Salesforce workflows reduce repetitive execution and improve guided decisions.", location: "Embedded AI", path: "/embedded-ai" },
  { code: "AFR", name: "Agentforce Runtime and Guardrails", description: "Deployable enterprise agents with topics, actions, and trust controls.", location: "Agentforce", path: "/agentforce" },
  { code: "D360", name: "Data 360 Context Fabric", description: "Unified customer and operations context for grounded agent decisions.", location: "Data 360", path: "/data-360" },
  { code: "H360", name: "Headless 360 Delivery", description: "Governed Salesforce intelligence in non-Salesforce channels.", location: "Headless 360", path: "/headless-360" },
  { code: "OBS", name: "Observability and Control Plane", description: "Quality scoring, telemetry, and governance for agent operations.", location: "Observability", path: "/observability" },
  { code: "COE", name: "Salesforce AI Center of Excellence", description: "Cross-functional governance model for secure scale.", location: "Operating Model", path: "/operating-model" },
  { code: "GAD", name: "GenAI Divide Framework", description: "Process-specific implementation and learning-loop model for measurable returns.", location: "Crossing the GenAI Divide", path: "/genai-divide" },
];

export const pages = {
  "/": {
    pill: "Executive Enablement",
    title: "Agentic AI for Siemens DISW: From Strategy to Scaled Execution",
    subhead: "Expose IT leadership to Salesforce AI capabilities beyond CPQ+, including Vibe Coding, Agentforce, Data 360, Agent Fabric, Headless 360, and Observability.",
    hero: "/assets/hero-disw.png",
    sections: [
      {
        title: "Context",
        cards: [
          { title: "The GenAI Divide", body: "Despite $30-40B in enterprise GenAI spend, 95% of organizations report no measurable return; only 5% of pilots produce enterprise value." },
          { title: "Root Cause", body: "Failure is primarily tied to poor workflow fit, weak adaptation loops, and lack of operational integration rather than model quality." },
          { title: "What Winners Do", body: "Winners prioritize process-specific customization, outcome-based scoring, and partner-led execution models for speed and repeatability." },
        ],
      },
      {
        title: "Session Outcome",
        cards: [
          { title: "Executive Enablement", body: "Align on immediate next steps for enablement, execution, and a Center of Excellence to improve Siemens SELA consumption and business impact." },
        ],
        bullets: [
          "IT leadership understands Salesforce AI capability depth and governance implications.",
          "Leaders identify where Vibe Coding and Agentforce accelerate current initiatives.",
          "DISW selects candidate workflows for rapid whiteboarding and pilot design.",
        ],
      },
      {
        title: "Current State, Friction Points, and Constraints",
        bullets: [
          "Current team structures are not optimized to deliver Salesforce AI at enterprise speed and scale.",
          "Multiple orgs and fragmented data increase governance and integration complexity.",
          "No common governance model exists across AI agents being built in parallel.",
          "Competing platform narratives and buy-vs-build pressure shape stakeholder expectations.",
        ],
      },
    ],
  },
  "/genai-divide": {
    pill: "Strategic Signal",
    title: "Crossing the GenAI Divide",
    subhead: "Move from pilot-heavy experimentation to measurable enterprise value through workflow-specific design and learning-system architecture.",
    sections: [
      {
        title: "Executive Snapshot",
        cards: [
          { title: "Market Reality", body: "Despite significant enterprise investment, most integrated GenAI pilots still show no measurable financial return." },
          { title: "The Divide", body: "A small group is extracting million-dollar outcomes, while most organizations remain pilot-heavy and production-light." },
        ],
      },
      {
        title: "What the Data Indicates",
        cards: [
          { title: "95%", body: "of organizations report no measurable P&L impact from integrated GenAI pilots." },
          { title: "5%", body: "are generating multi-million-dollar value from targeted implementations." },
          { title: "80%+ Explored", body: "general productivity tools, yet many outcomes remain individual-efficiency oriented instead of enterprise-financial." },
          { title: "60% to 5% Funnel", body: "Most enterprise-system evaluations fail to reach production due to brittle workflows and weak operational fit." },
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
          "The principal scaling barrier is learning behavior, not model sophistication.",
          "Systems that do not retain feedback, adapt to context, and improve over time fail to create durable business outcomes.",
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
    pill: "Vignette",
    title: "Embedded AI",
    subhead: "Improve decision velocity inside existing Salesforce workflows without forcing users into separate tools.",
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
          "Knowledge-assisted decision support for application support and IT strategy reviews.",
        ],
      },
      {
        title: "Executive Value",
        cards: [
          { title: "Faster Cycle Times", body: "Reduce repetitive effort in support and development workflows." },
          { title: "Higher Consistency", body: "Standardized prompts and guidance improve output quality across teams." },
          { title: "Governable Rollout", body: "Start small with trusted use cases and expand through policy guardrails." },
        ],
      },
      {
        title: "Trailhead Resources (Public)",
        subhead:
          "Curated public learning paths to help teams operationalize embedded AI capabilities inside existing Salesforce workflows.",
        resources: [
          {
            title: "Get Started with Prompts and Prompt Builder",
            body: "Build practical prompt design foundations for governed business usage.",
            label: "Trail · 80 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/get-started-with-prompts-and-prompt-studio",
          },
          {
            title: "Take a Tour of the New Agentforce Builder",
            body: "Explore modern builder capabilities for rapid AI experience design.",
            label: "Trail · 50 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/get-ready-for-the-new-agentforce-builder",
          },
          {
            title: "Get Smart with Salesforce Einstein",
            body: "Executive-friendly overview of AI patterns and CRM impact opportunities.",
            label: "Trail · 75 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/get_smart_einstein",
          },
          {
            title: "Agentforce Vibes IDE Fundamentals",
            body: "Understand pro-code acceleration fundamentals for builder productivity.",
            label: "Module · 25 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/agentforce-vibes-ide-fundamentals",
          },
        ],
      },
    ],
  },
  "/agentforce": {
    pill: "Vignette",
    title: "Agentforce",
    subhead: "Deploy enterprise-grade agents with governed actions, trusted grounding, and measurable operational outcomes.",
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
        title: "Executive Value",
        cards: [
          { title: "Actionable Agents", body: "Move from passive assistants to task-completing agents with business controls." },
          { title: "Bridge from CPQ+", body: "Create an actionable path from managed-package constraints to modern quoting workflows." },
          { title: "Faster Time-to-Value", body: "Combine pro-code acceleration and reusable delivery patterns." },
        ],
      },
      {
        title: "Trailhead Resources (Public)",
        subhead:
          "Curated enablement links grounded in current Trailhead search results to accelerate Agentforce readiness for DISW IT builders and architects.",
        resources: [
          {
            title: "Build Agentforce Solutions with Pro-Code Tools",
            body: "Comprehensive path for developing, testing, and deploying production Agentforce solutions.",
            label: "Trail · 1130 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/build-agentforce-solutions-with-pro-code-tools",
          },
          {
            title: "Agent Customization with Apex",
            body: "Practical module on creating custom agent actions and extending behavior with Apex.",
            label: "Module · 30 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/agent-customization-with-apex",
          },
          {
            title: "Build an Agent Using Agentforce DX",
            body: "Hands-on project for creating and deploying a custom AI agent with pro-code tools.",
            label: "Project · 35 min",
            url: "https://trailhead.salesforce.com/en/content/learn/projects/create-an-agent-using-pro-code-tools",
          },
          {
            title: "Apex Testing",
            body: "Core unit testing practices to improve reliability, deployment quality, and production confidence.",
            label: "Module · 135 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/apex_testing",
          },
        ],
      },
    ],
  },
  "/data-360": {
    pill: "Vignette",
    title: "Data 360",
    subhead: "Unify the context agents need to act with confidence across Salesforce, SAP, and adjacent systems.",
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
        title: "Executive Value",
        cards: [
          { title: "Unified Customer Context", body: "Connect fragmented records into a trusted profile for decisioning." },
          { title: "Grounded Responses", body: "Improve response quality with context-aware retrieval and activation." },
          { title: "Cross-Cloud Activation", body: "Operationalize insights across support, sales, and digital channels." },
        ],
      },
      {
        title: "Trailhead Resources (Public)",
        subhead:
          "Curated public learning paths to support Data 360 adoption, governance, and cross-cloud context strategy.",
        resources: [
          {
            title: "Unlock Your Data with Data Cloud",
            body: "Comprehensive path for Data Cloud foundations, unification, and activation.",
            label: "Trail · 606 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/unlock-your-data-with-data-cloud",
          },
          {
            title: "Model Data in Data 360",
            body: "Practical modeling and mapping guidance for scalable context architecture.",
            label: "Trail · 50 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/model-data-in-customer-data-platform",
          },
          {
            title: "Administer Data 360",
            body: "Admin-focused controls for data operations, quality, and platform readiness.",
            label: "Trail · 110 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/administer-customer-data-platform",
          },
          {
            title: "Use Data Insights Across Salesforce",
            body: "Expand cloud use cases by activating shared customer insight across teams.",
            label: "Trail · 50 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/use-data-insights-across-cloud",
          },
        ],
      },
    ],
  },
  "/headless-360": {
    pill: "Vignette",
    title: "Headless 360",
    subhead: "Deliver Salesforce-powered intelligence across external touchpoints without duplicating business logic.",
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
        title: "Executive Value",
        cards: [
          { title: "Channel Flexibility", body: "Expose consistent intelligence in portals and custom experiences." },
          { title: "Governed Integration", body: "Use API and MCP patterns to keep execution controlled and auditable." },
          { title: "Lower Rebuild Cost", body: "Reuse enterprise capabilities instead of rebuilding logic per channel." },
        ],
      },
      {
        title: "Trailhead Resources (Public)",
        subhead:
          "Curated public learning paths to support integration architecture, API strategy, and agentic orchestration outside the core UI shell.",
        resources: [
          {
            title: "Build Great APIs and Integrations with MuleSoft",
            body: "Core foundations for connected architecture and API-led delivery design.",
            label: "Trail · 60 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/great-integrations-mulesoft",
          },
          {
            title: "Explore Integration Patterns and Practices",
            body: "Pattern-based guidance for scalable and resilient enterprise integration.",
            label: "Trail · 130 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/explore-integration-patterns-and-practices",
          },
          {
            title: "Design Event-Driven Apps for Real-Time Integration",
            body: "Apply event-driven design for real-time orchestration across systems.",
            label: "Trail · 470 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/design-eventdriven-apps-for-realtime-integration",
          },
          {
            title: "Agentic Integration with MuleSoft Vibes",
            body: "Quick-start module for applying agentic AI concepts in integration workflows.",
            label: "Module · 10 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/agentic-integration-with-mulesoft-vibes",
          },
        ],
      },
    ],
  },
  "/observability": {
    pill: "Vignette",
    title: "Observability",
    subhead: "Create learning loops that convert pilot activity into reliable, scalable business outcomes.",
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
        title: "Executive Value",
        cards: [
          { title: "Quality Visibility", body: "Track agent outcomes, escalations, and reliability in one operating view." },
          { title: "Operational Learning", body: "Use feedback loops to continuously improve decision quality." },
          { title: "Governance Confidence", body: "Prove performance and policy adherence with measurable telemetry." },
        ],
      },
      {
        title: "Trailhead Resources (Public)",
        subhead:
          "Curated public learning paths for monitoring, quality control, and production governance across agentic implementations.",
        resources: [
          {
            title: "Agent Analytics and Monitoring",
            body: "Monitor agent performance and apply data-driven improvements to outcomes.",
            label: "Module · 30 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/agent-analytics-and-monitoring",
          },
          {
            title: "Event Monitoring Basics",
            body: "Use low-code Event Monitoring capabilities for security and operational visibility.",
            label: "Module · 40 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/event-monitoring-basics",
          },
          {
            title: "Event Monitoring Analytics App",
            body: "Visualize event log data to track risk, usage, and performance signals.",
            label: "Module · 45 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/event_monitoring_analytics",
          },
          {
            title: "Apex Testing",
            body: "Strengthen delivery confidence with robust unit testing and quality checks.",
            label: "Module · 135 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/apex_testing",
          },
        ],
      },
    ],
  },
  "/capability-map": {
    pill: "Architecture",
    title: "Capability Map and Sequencing",
    subhead: "Sequence capabilities by value speed, dependency logic, and organizational readiness.",
    sections: [
      {
        title: "Phased Delivery View",
        cards: [
          { title: "Phase 1", body: "Embedded AI + enablement baseline for immediate productivity wins." },
          { title: "Phase 2", body: "Core agent workflows with grounded data and baseline observability." },
          { title: "Phase 3", body: "Strategic differentiation through advanced orchestration and COE scale standards." },
        ],
      },
      {
        title: "Trailhead Learning Path by Delivery Phase (Public)",
        subhead:
          "Use these curated resources to align enablement sequencing with the same phased delivery model used in the capability roadmap.",
        resources: [
          {
            title: "Phase 1 · Agentforce Vibes IDE Fundamentals",
            body: "Rapid builder enablement for pro-code collaboration and AI-assisted development patterns.",
            label: "Module · 25 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/agentforce-vibes-ide-fundamentals",
          },
          {
            title: "Phase 1 · Get Started with Prompts and Prompt Builder",
            body: "Establish prompt-design fundamentals required for trusted, repeatable embedded AI usage.",
            label: "Trail · 80 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/get-started-with-prompts-and-prompt-studio",
          },
          {
            title: "Phase 2 · Build Agentforce Solutions with Pro-Code Tools",
            body: "Deep execution path for building, testing, and deploying production-ready Agentforce solutions.",
            label: "Trail · 1130 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/build-agentforce-solutions-with-pro-code-tools",
          },
          {
            title: "Phase 2 · Unlock Your Data with Data Cloud",
            body: "Build the unified data context needed for grounding, personalization, and cross-cloud decisions.",
            label: "Trail · 606 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/unlock-your-data-with-data-cloud",
          },
          {
            title: "Phase 3 · Explore Integration Patterns and Practices",
            body: "Scale architecture through integration patterns that reduce complexity and improve resilience.",
            label: "Trail · 130 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/explore-integration-patterns-and-practices",
          },
          {
            title: "Phase 3 · Agent Analytics and Monitoring",
            body: "Operationalize learning loops with agent monitoring and continuous outcome improvement.",
            label: "Module · 30 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/agent-analytics-and-monitoring",
          },
        ],
      },
    ],
  },
  "/operating-model": {
    pill: "Architecture",
    title: "Operating Model and Next Steps",
    subhead: "Translate strategy into execution momentum through a practical COE-centered delivery model.",
    sections: [
      {
        title: "Immediate Execution Priorities",
        cards: [
          { title: "Pilot Portfolio", body: "Select 2-3 high-confidence workflows with clear owners and baselines." },
          { title: "Enablement Motion", body: "Run instructor-led + Trailhead pathways across admin, dev, and architect roles." },
          { title: "COE Governance", body: "Set architecture standards, observability KPIs, and release controls from day one." },
        ],
      },
      {
        title: "COE Enablement Plan by Phase (Public Trailhead)",
        subhead:
          "Sequence capability building across IT roles so the Center of Excellence can move from pilot support to enterprise-scale governance.",
        resources: [
          {
            title: "Phase 1 · Build Your Administrator Career on Salesforce",
            body: "Establish admin-led platform fluency for secure configuration and operational ownership.",
            label: "Trail · 910 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/build-your-admin-career-on-salesforce",
          },
          {
            title: "Phase 1 · Get Started with Prompts and Prompt Builder",
            body: "Build shared prompt design and governance fundamentals across delivery teams.",
            label: "Trail · 80 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/get-started-with-prompts-and-prompt-studio",
          },
          {
            title: "Phase 2 · Build Agentforce Solutions with Pro-Code Tools",
            body: "Enable developers and architects to deliver production-grade agent workflows faster.",
            label: "Trail · 1130 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/build-agentforce-solutions-with-pro-code-tools",
          },
          {
            title: "Phase 2 · Unlock Your Data with Data Cloud",
            body: "Build shared data-context capabilities required for grounded, cross-cloud agent outcomes.",
            label: "Trail · 606 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/unlock-your-data-with-data-cloud",
          },
          {
            title: "Phase 3 · Build Your Architect Career on Salesforce",
            body: "Scale architecture standards, reference patterns, and cross-org governance rigor.",
            label: "Trail · 355 min",
            url: "https://trailhead.salesforce.com/en/content/learn/trails/salesforce-architect-careers",
          },
          {
            title: "Phase 3 · Agent Analytics and Monitoring",
            body: "Operationalize learning loops and quality controls for sustained business outcomes.",
            label: "Module · 30 min",
            url: "https://trailhead.salesforce.com/en/content/learn/modules/agent-analytics-and-monitoring",
          },
        ],
      },
    ],
  },
  "/external-research": {
    pill: "Appendix",
    title: "External Research",
    subhead:
      "Public and account-level research indicates DISW is balancing SaaS transition, post-M&A integration, and AI-led growth targets, creating strong demand for governed automation and unified data context.",
    sections: [
      {
        title: "Siemens DISW Overview",
        cards: [
          {
            title: "Scale and Scope",
            body: "DISW operates as a global software business with broad product breadth, complex enterprise operations, and a high expectation for execution consistency across regions.",
          },
          {
            title: "Transformation Moment",
            body: "The business is actively balancing SaaS transition, post-acquisition integration, and AI-led growth objectives under margin pressure.",
          },
          {
            title: "IT Imperative",
            body: "Corporate IT is expected to move from tool support toward platform governance, capability reuse, and measurable value realization.",
          },
        ],
      },
      {
        title: "Business and Transformation Signals",
        bullets: [
          "DISW is transitioning from perpetual licensing toward SaaS/subscription, increasing retention and expansion sensitivity.",
          "Continuing acquisitions increase urgency for customer data unification and process harmonization.",
          "Digital business growth and AI investment are high while margin and complexity pressures remain.",
          "Leadership expectations emphasize platform rationalization and accelerated time-to-value for enterprise initiatives.",
        ],
      },
      {
        title: "Competitive and Platform Dynamics",
        cards: [
          {
            title: "Competing Stack Pressure",
            body: "DISW must balance Salesforce acceleration with SAP, Microsoft, and open-source initiatives already influencing stakeholder preferences.",
          },
          {
            title: "Buy-vs-Build Decision Lens",
            body: "Service cost, internal capability constraints, and speed-to-market pressure require pragmatic architecture decisions and reusable patterns.",
          },
          {
            title: "SELA Opportunity",
            body: "The existing enterprise commitment creates a strong path to scale if capability consumption and governance become execution standards.",
          },
        ],
      },
      {
        title: "Implications for This Discussion",
        bullets: [
          "Anchor discussion in architecture and operating model decisions, not isolated feature demos.",
          "Frame Salesforce AI as the path to execution speed within an already-approved global platform commitment.",
          "Position measurable progress around use-case adoption and capability consumption rather than customer-specific metrics.",
          "Use phased enablement and governance motions to convert interest into repeatable production outcomes.",
        ],
      },
      {
        title: "Decision Prompts for IT Leadership",
        bullets: [
          "Which 2-3 workflows have the strongest blend of business urgency and operational feasibility for near-term pilots?",
          "What governance controls are mandatory before scaling from pilot to broad rollout across multiple orgs?",
          "Where should partner-led acceleration be used to close capability gaps without delaying execution?",
        ],
      },
    ],
  },
  "/forward-looking-statement": {
    pill: "Appendix",
    title: "Forward Looking Statement",
    subhead: "",
    sections: [
      {
        title: "Legal Statement",
        legal:
          "This presentation contains forward-looking statements about, among other things, trend analyses and statements regarding future events, anticipated growth and industry prospects, and our strategies, expectation or plans regarding product releases and enhancements. The achievement or success of the matters covered by such forward-looking statements involves risks, uncertainties and assumptions. If any such risks or uncertainties materialize or if any of the assumptions prove incorrect, results or outcomes could differ materially from those expressed or implied by these forward-looking statements. The risks and uncertainties referred to above include those factors discussed in Salesforce’s reports filed from time to time with the Securities and Exchange Commission, including, but not limited to our ability to meet the expectations of our customers; uncertainties regarding Al technologies and their integration into our product offerings; the effect of evolving domestic and foreign government regulations; regulatory developments and regulatory investigations involving us or affecting our industry; our ability to successfully introduce new services and product features, including related to AI and Agentforce; our ability to execute our business plans; the pace of change and innovation and our ability to compete in the markets in which we participate; and our ability to maintain and enhance our brands.",
      },
    ],
  },
};
