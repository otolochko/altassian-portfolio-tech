import React from "react";

interface CodeBlockProps {
  children: React.ReactNode;
  showLineNumbers?: boolean;
  startLine?: number;
  className?: string;
  variant?: "light" | "dark";
}

interface CodeLineProps {
  children: React.ReactNode;
  lineNumber?: number;
  showLineNumber?: boolean;
  className?: string;
}

export const CodeLine = ({
  children,
  lineNumber,
  showLineNumber = true,
  className = "",
}: CodeLineProps) => {
  return (
    <div className={`flex ${className}`}>
      {showLineNumber && lineNumber !== undefined && (
        <span className="line-number select-none text-foreground-muted w-8 text-right mr-4 shrink-0">
          {lineNumber}
        </span>
      )}
      <span className="flex-1">{children}</span>
    </div>
  );
};

const CodeBlock = ({
  children,
  showLineNumbers = false,
  startLine = 1,
  className = "",
  variant = "light",
}: CodeBlockProps) => {
  const isDark = variant === "dark";

  // If children is a string, split by newlines
  const lines = typeof children === "string" ? children.split("\n") : null;

  return (
    <div
      className={`
        font-mono text-sm leading-relaxed p-4 rounded-lg overflow-x-auto
        ${isDark ? "bg-background-terminal text-foreground-inverse" : "bg-background text-foreground"}
        ${className}
      `}
    >
      {lines
        ? lines.map((line, index) => (
            <CodeLine
              key={index}
              lineNumber={startLine + index}
              showLineNumber={showLineNumbers}
            >
              {line || " "}
            </CodeLine>
          ))
        : children}
    </div>
  );
};

export default CodeBlock;
