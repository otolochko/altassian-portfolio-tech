interface ChallengesProps {
  challenges: {
    title: string;
    desc: string;
    items: readonly {
      problem: string;
      solution: string;
    }[];
  };
}

const Challenges = ({ challenges }: ChallengesProps) => {
  return (
    <section id="challenges" className="py-20 bg-background-elevated">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-foreground-muted mb-4">
            <span className="text-syntax-teal">$</span>{" "}
            <span className="text-foreground">git diff</span>{" "}
            <span className="text-syntax-orange">challenges.md</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            <span className="text-syntax-purple">#</span> {challenges.title}
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto font-sans">{challenges.desc}</p>
        </div>

        {/* Challenges grid as git diff */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-terminal transition-shadow"
            >
              {/* Diff header */}
              <div className="px-4 py-2 bg-background border-b border-border font-mono text-xs text-foreground-muted">
                diff --git a/problem b/solution
              </div>

              {/* Problem (red / remove) */}
              <div className="px-4 py-4 border-b border-border">
                <div className="font-mono text-xs text-syntax-red mb-2 uppercase tracking-wider">
                  @@ problem @@
                </div>
                <div className="font-mono text-sm">
                  <span className="text-syntax-red font-bold">- </span>
                  <span className="text-foreground">{item.problem}</span>
                </div>
              </div>

              {/* Solution (green / add) */}
              <div className="px-4 py-4">
                <div className="font-mono text-xs text-syntax-green mb-2 uppercase tracking-wider">
                  @@ solution @@
                </div>
                <div className="font-sans text-sm">
                  <span className="text-syntax-green font-bold font-mono">+ </span>
                  <span className="text-foreground-muted">{item.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
