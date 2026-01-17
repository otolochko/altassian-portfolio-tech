import { Linkedin, CircleUser } from "lucide-react";
import ContactFormClient from "../ContactFormClient";
import TerminalWindow from "../ui/TerminalWindow";
import { Lang } from "../../i18n";

interface ContactSectionProps {
  contact: {
    title: string;
    desc: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  lang: Lang;
}

const ContactSection = ({ contact, lang }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-24 px-4 bg-background-terminal">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="contact.sh" variant="dark" className="overflow-visible">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: whois output */}
            <div className="lg:w-2/5 space-y-6">
              {/* Command */}
              <div className="font-mono text-sm">
                <span className="text-syntax-teal">$</span>{" "}
                <span className="text-foreground-inverse">whois</span>{" "}
                <span className="text-syntax-orange">oleksandr</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground-inverse">
                {contact.title}
              </h3>

              <p className="text-foreground-inverse-muted font-sans leading-relaxed">
                {contact.desc}
              </p>

              {/* Contact info as terminal output */}
              <div className="space-y-4 pt-4">
                {/* Atlassian Community */}
                <a
                  href="https://community.atlassian.com/user/profile/af784eda-dcd2-4fba-8282-d1cd8548b328"
                  target="_blank"
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="p-2 bg-syntax-teal/20 rounded-lg text-syntax-teal">
                    <CircleUser className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-syntax-cyan">community:</div>
                    <div className="text-foreground-inverse-muted group-hover:text-syntax-teal transition-colors">
                      Atlassian Community Profile
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/oleksandrtolochko/"
                  target="_blank"
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="p-2 bg-syntax-blue/20 rounded-lg text-syntax-blue">
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-syntax-cyan">linkedin:</div>
                    <div className="text-foreground-inverse-muted group-hover:text-syntax-blue transition-colors">
                      /in/oleksandrtolochko
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-3/5 bg-background-elevated rounded-xl p-6 border border-border">
              <ContactFormClient lang={lang} labels={contact.form} />
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default ContactSection;
