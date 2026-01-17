const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Session end */}
          <div className="font-mono text-sm text-foreground-muted">
            <span className="text-syntax-teal">$</span>{" "}
            <span className="text-foreground">exit</span>
          </div>

          {/* Copyright */}
          <div className="font-mono text-sm text-foreground-muted">
            <span className="text-syntax-green">#</span>{" "}
            <span className="text-foreground-muted">
              {currentYear} Oleksandr Tolochko
            </span>
          </div>

          {/* Terminal decoration */}
          <div className="font-mono text-sm text-foreground-muted hidden md:block">
            <span className="text-syntax-green">[process completed]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
