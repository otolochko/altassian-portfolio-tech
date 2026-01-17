import React from "react";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

const TerminalWindow = ({
  title = "terminal",
  children,
  variant = "light",
  className = "",
}: TerminalWindowProps) => {
  const isDark = variant === "dark";

  return (
    <div
      className={`
        rounded-terminal overflow-hidden shadow-terminal
        ${isDark ? "bg-background-terminal border-border-dark" : "bg-background-elevated border-border"}
        border
        ${className}
      `}
    >
      {/* Title bar */}
      <div
        className={`
          flex items-center gap-2 px-4 py-3
          ${isDark ? "border-border-dark bg-white/[0.02]" : "border-border bg-black/[0.02]"}
          border-b
        `}
      >
        {/* Traffic lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-traffic-red" />
          <div className="w-3 h-3 rounded-full bg-traffic-yellow" />
          <div className="w-3 h-3 rounded-full bg-traffic-green" />
        </div>

        {/* Title */}
        <div
          className={`
            flex-1 text-center text-sm font-mono
            ${isDark ? "text-foreground-inverse-muted" : "text-foreground-muted"}
          `}
        >
          {title}
        </div>

        {/* Spacer for symmetry */}
        <div className="w-[52px]" />
      </div>

      {/* Body */}
      <div className="p-5">{children}</div>
    </div>
  );
};

export default TerminalWindow;
