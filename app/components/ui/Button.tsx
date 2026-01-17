import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  showPrompt?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  showPrompt = false,
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "px-6 py-3 rounded-lg font-mono font-semibold transition-all duration-200 inline-flex items-center gap-2 justify-center text-sm";

  const variants = {
    primary:
      "bg-foreground text-foreground-inverse hover:bg-syntax-teal hover:text-foreground shadow-terminal hover:shadow-terminal-hover",
    outline:
      "border-2 border-foreground text-foreground hover:border-syntax-teal hover:text-syntax-teal bg-transparent",
    ghost:
      "text-foreground-muted hover:text-foreground hover:bg-foreground/5",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {showPrompt && <span className="text-syntax-teal">$</span>}
      {children}
    </button>
  );
};

export default Button;
