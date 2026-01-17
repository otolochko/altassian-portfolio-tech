interface AboutProps {
  about: {
    title: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
  };
}

const About = ({ about }: AboutProps) => {
  return (
    <section id="about" className="py-20 bg-background-elevated border-y border-border">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Content */}
        <div>
          {/* Terminal command header */}
          <div className="font-mono text-sm text-foreground-muted mb-6">
            <span className="text-syntax-teal">$</span>{" "}
            <span className="text-foreground">cat</span>{" "}
            <span className="text-syntax-orange">about.md</span>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-foreground">
            <span className="text-syntax-purple">#</span> {about.title}
          </h2>

          <div className="font-sans space-y-4">
            <p className="text-foreground-muted text-lg leading-relaxed">{about.p1}</p>
            <p className="text-foreground-muted leading-relaxed">{about.p2}</p>
          </div>
        </div>

        {/* Right: Stats as terminal output */}
        <div className="space-y-4">
          {/* Stat 1 */}
          <div className="bg-background rounded-xl p-6 border border-border font-mono">
            <div className="text-sm text-foreground-muted mb-2">
              <span className="text-syntax-cyan">YEARS_EXP</span>
              <span className="text-syntax-purple">=</span>
            </div>
            <div className="text-4xl font-bold text-syntax-orange">8+</div>
            <div className="text-sm text-foreground-muted mt-2 uppercase tracking-wider">
              {about.stat1}
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-background rounded-xl p-6 border border-border font-mono">
            <div className="text-sm text-foreground-muted mb-2">
              <span className="text-syntax-cyan">CERTIFICATION</span>
              <span className="text-syntax-purple">=</span>
            </div>
            <div className="text-4xl font-bold text-syntax-teal">ACE</div>
            <div className="text-sm text-foreground-muted mt-2 uppercase tracking-wider">
              {about.stat2}
            </div>
          </div>

          {/* Terminal decoration */}
          <div className="font-mono text-sm text-foreground-muted/60 pt-2">
            <span className="text-syntax-green">[info]</span> Export complete
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
