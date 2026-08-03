import React, { useEffect, useState } from 'react';
import { Menu, X, CheckCircle2 } from 'lucide-react';
import heroDISW from "@assets/hero-disw.png";

const domains = [
  {
    id: "platform-readiness",
    num: "01",
    title: "Platform Readiness",
    subhead: "Establishing the foundational data infrastructure, connectivity, and performance standards required to power low-latency, high-accuracy agentic responses.",
    talkingPoints: [
      "Optimize the DISW data estate (Data Cloud) for real-time retrieval and context injection.",
      "Ensure enterprise connectivity through Mulesoft and native connectors for cross-system actions.",
      "Adopt a \"Metadata-First\" architecture to enable autonomous reasoning without brittle hardcoding."
    ]
  },
  {
    id: "trust-guardrails",
    num: "02",
    title: "Trust & Guardrails",
    subhead: "The Einstein Trust Layer is the bedrock of enterprise AI, ensuring data privacy, toxicity filtering, and hallucination management at the platform level.",
    talkingPoints: [
      "Zero-retention policy for LLM providers ensures DISW proprietary data remains within the trust boundary.",
      "Dynamic grounding reduces hallucinations by anchoring responses in DISW-verified knowledge and records.",
      "Policy-driven PII masking and toxicity monitoring are managed via the platform, not individual codebases."
    ]
  },
  {
    id: "logic-orchestration",
    num: "03",
    title: "Logic & Orchestration",
    subhead: "Moving beyond simple chatbots to agents that can plan, reason, and execute complex workflows using existing Flow, Apex, and API investments.",
    talkingPoints: [
      "Reuse existing IT assets (Flows, Apex) as \"Tools\" that the Agent can invoke autonomously.",
      "Leverage the Reasoning Engine to handle multi-step tasks that traditionally required human handoffs.",
      "Shift focus from building dialogue trees to defining clear capabilities and intents."
    ]
  },
  {
    id: "headless-360",
    num: "04",
    title: "Headless 360",
    subhead: "Headless 360 enables Salesforce capabilities on non-Salesforce digital surfaces, turning portals and apps into governed AI engagement channels without duplicative backend sprawl.",
    talkingPoints: [
      "Deliver agentic experiences in DISW-preferred interfaces while retaining platform trust controls.",
      "Reduce integration and maintenance overhead from custom middleware-heavy patterns.",
      "Support decoupled front-end innovation while centralizing execution, data policy, and governance."
    ]
  },
  {
    id: "observability",
    num: "05",
    title: "Observability",
    subhead: "Observability is the control layer that makes agentic systems production-ready by exposing health, quality, escalation patterns, and improvement opportunities over time.",
    talkingPoints: [
      "Track outcomes with business and IT metrics: containment, escalation, quality, and cycle time.",
      "Operationalize an agentic DevOps lifecycle: build, test, deploy, observe, and optimize.",
      "Build leadership confidence with transparent governance and continuous quality scoring."
    ]
  }
];

export default function Workshop() {
  const [activeSection, setActiveSection] = useState<string>("platform-readiness");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let intersectingId = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          intersectingId = entry.target.id;
        }
      });
      if (intersectingId) {
        setActiveSection(intersectingId);
      }
    }, { rootMargin: "-20% 0px -60% 0px" });

    domains.forEach(domain => {
      const el = document.getElementById(domain.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -40; // Add top padding to jump position
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-transparent w-full font-sans selection:bg-accent/30 selection:text-white">
      {/* Mobile Top Nav */}
      <div className="lg:hidden fixed top-0 w-full h-16 border-b border-border bg-background/95 backdrop-blur z-50 flex items-center justify-between px-6">
        <div>
          <h1 className="font-semibold text-lg text-foreground tracking-tight">Agentforce</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">Siemens DISW</p>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
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
      <aside className={`
        fixed top-0 bottom-0 left-0 z-40 w-[290px] border-r border-border bg-sidebar/95 backdrop-blur
        transition-transform duration-300 ease-in-out lg:translate-x-0 pt-20 lg:pt-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col p-8 overflow-y-auto hide-scrollbar">
          <div className="hidden lg:block mb-12">
            <h1 className="font-semibold text-2xl text-foreground tracking-tight">Agentforce</h1>
            <p className="text-sm text-muted-foreground mt-1 font-medium">Siemens DISW Workshop</p>
          </div>

          <nav className="flex-1">
            <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">
              Strategic Domains
            </h3>
            <ul className="space-y-2">
              {domains.map((domain) => (
                <li key={domain.id}>
                  <button
                    onClick={() => scrollToSection(domain.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                      ${activeSection === domain.id 
                        ? 'bg-accent/15 text-accent shadow-[inset_0_0_0_1px_rgba(0,183,183,0.2)]' 
                        : 'text-muted-foreground hover:bg-accent/5 hover:text-accent'
                      }
                    `}
                  >
                    {domain.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-[290px] pt-16 lg:pt-0">
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[420px] lg:min-h-[500px] flex flex-col justify-end border-b border-border overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: `url(${heroDISW})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
          
          <div className="relative z-20 p-8 lg:p-16 max-w-5xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-accent bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              Workshop Overview
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Architecting for the <br className="hidden md:block"/>Agentic Era
            </h1>
            <p className="text-lg lg:text-xl text-white/70 max-w-3xl leading-relaxed font-medium">
              A leadership roadmap for operationalizing Agentforce within the DISW IT ecosystem—balancing speed, governance, and business impact.
            </p>
          </div>
        </section>

        {/* Domain Sections */}
        <div className="p-6 md:p-12 lg:p-16 max-w-5xl mx-auto space-y-16 md:space-y-24">
          {domains.map((domain) => (
            <section 
              key={domain.id} 
              id={domain.id} 
              className="scroll-mt-32 relative rounded-2xl border border-border overflow-hidden shadow-2xl shadow-black/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-card/20 pointer-events-none" />
              
              {/* Content Zone */}
              <div className="relative z-10 p-8 md:p-12 border-b border-border/50">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-primary-foreground text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-[0_0_15px_rgba(0,183,183,0.3)]">
                  Domain {domain.num}
                </span>
                <h2 className="text-3xl font-semibold text-foreground mb-6 tracking-tight">
                  {domain.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {domain.subhead}
                </p>
              </div>

              {/* Topic Zone */}
              <div className="relative z-10 p-8 md:p-12 bg-black/20">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80 mb-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent/50" />
                  Executive Talking Points
                </h3>
                <ul className="space-y-6">
                  {domain.talkingPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 bg-accent/10 p-1 rounded-full">
                        <CheckCircle2 size={16} className="text-accent" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="py-12 md:py-16 text-center border-t border-border mt-12 bg-black/10">
          <p className="text-xs md:text-sm text-muted-foreground font-medium px-6">
            Prepared for Siemens DISW IT Leadership discussion <span className="mx-2 opacity-50">·</span> Agentforce Workshop <span className="mx-2 opacity-50">·</span> August 2026
          </p>
        </footer>

      </main>
    </div>
  );
}