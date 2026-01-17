import TerminalWindow from "../ui/TerminalWindow";

interface ServicesProps {
  services: {
    title: string;
    desc: string;
    items: readonly {
      title: string;
      desc: string;
      features: readonly string[];
    }[];
  };
}

// Convert service title to filename
const toFilename = (title: string) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") + ".sh";
};

const Services = ({ services }: ServicesProps) => {
  return (
    <section id="services" className="py-20 px-4 bg-background-elevated">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-foreground-muted mb-4">
            <span className="text-syntax-teal">$</span>{" "}
            <span className="text-foreground">ls</span>{" "}
            <span className="text-syntax-orange">./services</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            <span className="text-syntax-purple">#</span> {services.title}
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto font-sans">{services.desc}</p>
        </div>

        {/* Services as terminal windows */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.items.map((service, idx) => (
            <TerminalWindow key={idx} title={toFilename(service.title)} variant="light">
              <div className="space-y-4">
                {/* Service title */}
                <div className="font-mono">
                  <span className="text-syntax-purple">#!/bin/bash</span>
                </div>

                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>

                {/* Description */}
                <p className="text-foreground-muted font-sans text-sm leading-relaxed">
                  <span className="text-syntax-green font-mono"># </span>
                  {service.desc}
                </p>

                {/* Features as commands */}
                <div className="space-y-2 pt-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="font-mono text-sm flex items-start gap-2">
                      <span className="text-syntax-teal shrink-0">run_task</span>
                      <span className="text-syntax-orange">&quot;{feature}&quot;</span>
                    </div>
                  ))}
                </div>

                {/* Exit status */}
                <div className="pt-4 border-t border-border font-mono text-xs text-foreground-muted">
                  <span className="text-syntax-green">exit 0</span>
                  <span className="text-foreground-muted/60"> # Success</span>
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
