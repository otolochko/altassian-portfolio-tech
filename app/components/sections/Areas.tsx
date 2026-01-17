import { Server, Code, Briefcase, Users, Lock, Layout } from "lucide-react";

const iconMap = {
  Server: <Server size={20} aria-hidden="true" />,
  Code: <Code size={20} aria-hidden="true" />,
  Briefcase: <Briefcase size={20} aria-hidden="true" />,
  Users: <Users size={20} aria-hidden="true" />,
  Lock: <Lock size={20} aria-hidden="true" />,
  Layout: <Layout size={20} aria-hidden="true" />,
};

interface AreasProps {
  areas: {
    title: string;
    desc: string;
    items: readonly {
      title: string;
      list: readonly string[];
      icon: string;
    }[];
  };
}

const Areas = ({ areas }: AreasProps) => {
  return (
    <section id="areas" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-foreground-muted mb-4">
            <span className="text-syntax-teal">$</span>{" "}
            <span className="text-foreground">tree</span>{" "}
            <span className="text-syntax-orange">./expertise</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            <span className="text-syntax-purple">#</span> {areas.title}
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto font-sans">{areas.desc}</p>
        </div>

        {/* Directory tree */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.items.map((area, idx) => {
            const isLast = idx === areas.items.length - 1;
            return (
              <div
                key={idx}
                className="bg-background-elevated rounded-xl border border-border p-6 hover:shadow-terminal transition-shadow"
              >
                {/* Folder header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-syntax-teal/10 text-syntax-teal rounded-lg flex items-center justify-center">
                    {iconMap[area.icon as keyof typeof iconMap]}
                  </div>
                  <div className="font-mono text-sm">
                    <span className="text-foreground-muted">{isLast ? "└── " : "├── "}</span>
                    <span className="text-syntax-blue">{area.title.toLowerCase().replace(/ /g, "-")}/</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-4 pl-2">{area.title}</h3>

                {/* File list */}
                <ul className="space-y-2 pl-6">
                  {area.list.map((li, lIdx) => {
                    const isLastItem = lIdx === area.list.length - 1;
                    return (
                      <li key={lIdx} className="font-mono text-sm text-foreground-muted flex items-start">
                        <span className="text-foreground-muted/60 mr-2 shrink-0">
                          {isLastItem ? "└── " : "├── "}
                        </span>
                        <span className="font-sans">{li}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Tree summary */}
        <div className="mt-8 text-center font-mono text-sm text-foreground-muted">
          <span className="text-syntax-green">{areas.items.length} directories</span>,{" "}
          <span className="text-syntax-orange">
            {areas.items.reduce((acc, area) => acc + area.list.length, 0)} files
          </span>
        </div>
      </div>
    </section>
  );
};

export default Areas;
