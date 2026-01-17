"use client";

import React from "react";

interface BlinkingCursorProps {
  className?: string;
  variant?: "light" | "dark";
}

const BlinkingCursor = ({ className = "", variant = "dark" }: BlinkingCursorProps) => {
  return (
    <span
      className={`
        inline-block w-[2px] h-[1.1em] ml-0.5 align-middle animate-blink
        ${variant === "dark" ? "bg-syntax-teal" : "bg-foreground"}
        ${className}
      `}
      aria-hidden="true"
    />
  );
};

export default BlinkingCursor;
