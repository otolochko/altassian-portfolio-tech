interface ProjectsProps {
  projects: {
    title: string;
    desc: string;
    items: readonly {
      category: string;
      title: string;
      desc: string;
      outcomes: readonly string[];
      tags: readonly string[];
    }[];
  };
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-foreground-muted mb-4">
            <span className="text-syntax-teal">$</span>{" "}
            <span className="text-foreground">git log</span>{" "}
            <span className="text-syntax-orange">--oneline --graph</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            <span className="text-syntax-purple">#</span> {projects.title}
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto font-sans">{projects.desc}</p>
        </div>

        {/* Projects as git log / README */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.items.map((project, idx) => (
            <div
              key={idx}
              className="bg-background-elevated rounded-xl border border-border overflow-hidden hover:shadow-terminal transition-shadow"
            >
              {/* Git branch header */}
              <div className="px-6 py-3 bg-background border-b border-border flex items-center gap-3">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-syntax-purple">*</span>
                  <span className="text-syntax-orange">
                    {project.category.toLowerCase().replace(/ • /g, "/").replace(/ /g, "-")}
                  </span>
                </div>
              </div>

              {/* README content */}
              <div className="p-6">
                {/* Title as H1 */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  <span className="text-syntax-purple font-mono"># </span>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground-muted font-sans text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Outcomes as checklist */}
                <div className="mb-5">
                  <div className="font-mono text-xs text-syntax-cyan uppercase tracking-wider mb-3">
                    ## Outcomes
                  </div>
                  <ul className="space-y-2">
                    {project.outcomes.map((o, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-syntax-green font-mono shrink-0">+</span>
                        <span className="text-foreground-muted font-sans">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags as badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 bg-background text-foreground-muted text-xs font-mono rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Commit footer */}
              <div className="px-6 py-3 bg-background border-t border-border font-mono text-xs text-foreground-muted flex items-center gap-2">
                <span className="text-syntax-yellow">commit</span>
                <span className="text-foreground-muted/60">
                  {Math.random().toString(16).slice(2, 9)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
