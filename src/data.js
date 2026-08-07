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
        title: "Enterprise Snapshot",
        cards: [
          { title: "95% See No Return", body: "Most integrated GenAI pilots never progress into measurable P&L impact." },
          { title: "5% Capture Value", body: "A small set of organizations consistently generate multi-million-dollar outcomes." },
          { title: "Execution Gap", body: "The largest blocker is implementation quality, not model quality." },
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
        title: "Executive Value",
        cards: [
          { title: "Faster Cycle Times", body: "Reduce repetitive effort in support and development workflows." },
          { title: "Higher Consistency", body: "Standardized prompts and guidance improve output quality across teams." },
          { title: "Governable Rollout", body: "Start small with trusted use cases and expand through policy guardrails." },
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
        title: "Executive Value",
        cards: [
          { title: "Actionable Agents", body: "Move from passive assistants to task-completing agents with business controls." },
          { title: "Bridge from CPQ+", body: "Create an actionable path from managed-package constraints to modern quoting workflows." },
          { title: "Faster Time-to-Value", body: "Combine pro-code acceleration and reusable delivery patterns." },
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
        title: "Executive Value",
        cards: [
          { title: "Unified Customer Context", body: "Connect fragmented records into a trusted profile for decisioning." },
          { title: "Grounded Responses", body: "Improve response quality with context-aware retrieval and activation." },
          { title: "Cross-Cloud Activation", body: "Operationalize insights across support, sales, and digital channels." },
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
        title: "Executive Value",
        cards: [
          { title: "Channel Flexibility", body: "Expose consistent intelligence in portals and custom experiences." },
          { title: "Governed Integration", body: "Use API and MCP patterns to keep execution controlled and auditable." },
          { title: "Lower Rebuild Cost", body: "Reuse enterprise capabilities instead of rebuilding logic per channel." },
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
        title: "Executive Value",
        cards: [
          { title: "Quality Visibility", body: "Track agent outcomes, escalations, and reliability in one operating view." },
          { title: "Operational Learning", body: "Use feedback loops to continuously improve decision quality." },
          { title: "Governance Confidence", body: "Prove performance and policy adherence with measurable telemetry." },
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
    ],
  },
  "/external-research": {
    pill: "Appendix",
    title: "External Research",
    subhead: "DISW transformation signals indicate urgency for governed automation, data unification, and speed of execution.",
    sections: [
      {
        title: "Alignment Signals",
        bullets: [
          "SaaS transition increases retention sensitivity and recurring-value pressure.",
          "Post-M&A integration amplifies need for unified data and process harmonization.",
          "AI investment is increasing while margin discipline and complexity constraints remain.",
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
        title: "Legal Statement",
        legal:
          "This presentation contains forward-looking statements about, among other things, trend analyses and statements regarding future events, anticipated growth and industry prospects, and our strategies, expectation or plans regarding product releases and enhancements. The achievement or success of the matters covered by such forward-looking statements involves risks, uncertainties and assumptions. If any such risks or uncertainties materialize or if any of the assumptions prove incorrect, results or outcomes could differ materially from those expressed or implied by these forward-looking statements. The risks and uncertainties referred to above include those factors discussed in Salesforce’s reports filed from time to time with the Securities and Exchange Commission, including, but not limited to our ability to meet the expectations of our customers; uncertainties regarding Al technologies and their integration into our product offerings; the effect of evolving domestic and foreign government regulations; regulatory developments and regulatory investigations involving us or affecting our industry; our ability to successfully introduce new services and product features, including related to AI and Agentforce; our ability to execute our business plans; the pace of change and innovation and our ability to compete in the markets in which we participate; and our ability to maintain and enhance our brands.",
      },
    ],
  },
};
