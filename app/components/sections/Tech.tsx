import TerminalWindow from "../ui/TerminalWindow";

interface TechProps {
  tech: {
    title: string;
    certsTitle: string;
    certs: readonly string[];
    stack: readonly {
      category: string;
      items: string;
    }[];
  };
}

const Tech = ({ tech }: TechProps) => {
  return (
    <section className="py-20 bg-background-terminal text-foreground-inverse">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="font-mono text-sm text-foreground-inverse-muted mb-4">
            <span className="text-syntax-teal">$</span>{" "}
            <span className="text-foreground-inverse">cat</span>{" "}
            <span className="text-syntax-orange">config.yml</span>
          </div>
          <h2 className="text-3xl font-bold">
            <span className="text-syntax-purple">#</span> {tech.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications as checklist */}
          <TerminalWindow title="certifications.txt" variant="dark">
            <div className="font-mono text-sm">
              <div className="text-syntax-cyan mb-4">{tech.certsTitle}:</div>
              <div className="space-y-2">
                {tech.certs.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-syntax-green shrink-0">[x]</span>
                    <span className="text-foreground-inverse-muted">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </TerminalWindow>

          {/* Stack as YAML config */}
          <TerminalWindow title="stack.yml" variant="dark">
            <div className="font-mono text-sm space-y-4">
              <div className="text-syntax-purple">---</div>
              {tech.stack.map((item, i) => (
                <div key={i}>
                  <div className="text-syntax-cyan">
                    {item.category.toLowerCase().replace(/ & /g, "_").replace(/ /g, "_")}:
                  </div>
                  <div className="pl-4 text-foreground-inverse-muted">
                    - <span className="text-syntax-orange">&quot;{item.items}&quot;</span>
                  </div>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
};

export default Tech;
