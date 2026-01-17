"use client";

import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import TerminalWindow from "../ui/TerminalWindow";
import TypewriterText from "../ui/TypewriterText";

interface HeroProps {
  hero: {
    badge: string;
    titleTop: string;
    titleHighlight: string;
    desc: string;
    btnPrimary: string;
    btnSecondary: string;
  };
}

const Hero = ({ hero }: HeroProps) => {
  return (
    <section className="pt-28 pb-20 px-4 bg-background min-h-[90vh] flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <TerminalWindow title="welcome.sh" variant="light" className="terminal-glow">
          <div className="space-y-6">
            {/* Command line */}
            <div className="font-mono text-sm text-foreground-muted">
              <span className="text-syntax-green">oleksandr</span>
              <span className="text-foreground-muted">@</span>
              <span className="text-syntax-purple">portfolio</span>
              <span className="text-foreground-muted">:</span>
              <span className="text-syntax-cyan">~</span>
              <span className="text-foreground-muted">$ </span>
              <span className="text-foreground">./welcome.sh</span>
            </div>

            {/* Badge */}
            <div className="inline-block font-mono text-sm px-3 py-1.5 bg-syntax-teal/10 text-syntax-teal border border-syntax-teal/30 rounded-md">
              # {hero.badge}
            </div>

            {/* Main heading with typewriter */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              <TypewriterText
                text={hero.titleTop}
                speed={40}
                showCursor={false}
              />
              <br />
              <span className="text-syntax-teal">
                <TypewriterText
                  text={hero.titleHighlight}
                  speed={40}
                  delay={hero.titleTop.length * 40 + 200}
                  cursorVariant="light"
                />
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed font-sans">
              {hero.desc}
            </p>

            {/* Buttons as commands */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services">
                <Button type="button" showPrompt>
                  {hero.btnPrimary} <ArrowRight size={18} aria-hidden="true" />
                </Button>
              </a>
              <a href="#contact">
                <Button type="button" variant="outline" showPrompt>
                  {hero.btnSecondary}
                </Button>
              </a>
            </div>

            {/* Terminal output */}
            <div className="pt-4 font-mono text-sm text-foreground-muted border-t border-border mt-6">
              <div className="text-syntax-green">
                [OK] Portfolio loaded successfully
              </div>
              <div className="text-foreground-muted">
                Ready for collaboration...
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default Hero;
