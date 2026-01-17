import React from "react";

interface CommandPromptProps {
  user?: string;
  host?: string;
  path?: string;
  command?: string;
  children?: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

const CommandPrompt = ({
  user = "oleksandr",
  host = "portfolio",
  path = "~",
  command,
  children,
  className = "",
  variant = "light",
}: CommandPromptProps) => {
  const isDark = variant === "dark";

  return (
    <div className={`font-mono ${className}`}>
      <span className={isDark ? "text-syntax-green" : "text-syntax-green"}>
        {user}
      </span>
      <span className={isDark ? "text-foreground-inverse-muted" : "text-foreground-muted"}>@</span>
      <span className={isDark ? "text-syntax-purple" : "text-syntax-purple"}>
        {host}
      </span>
      <span className={isDark ? "text-foreground-inverse-muted" : "text-foreground-muted"}>:</span>
      <span className={isDark ? "text-syntax-cyan" : "text-syntax-blue"}>
        {path}
      </span>
      <span className={isDark ? "text-foreground-inverse-muted" : "text-foreground-muted"}>$ </span>
      {command && (
        <span className={isDark ? "text-foreground-inverse" : "text-foreground"}>
          {command}
        </span>
      )}
      {children}
    </div>
  );
};

export default CommandPrompt;
