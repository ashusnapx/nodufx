"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";

    const variants = {
      primary:
        "bg-gradient-to-r from-accent via-accent-secondary to-accent text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-105 active:scale-95",
      secondary:
        "bg-muted text-foreground hover:bg-muted/80 hover:scale-105 active:scale-95",
      outline:
        "border-2 border-accent/50 text-accent hover:bg-accent/10 hover:border-accent hover:scale-105 active:scale-95",
      ghost:
        "text-foreground hover:bg-foreground/5 hover:scale-105 active:scale-95",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Shimmer effect on hover */}
        <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent' />
        <span className='relative z-10 flex items-center gap-2'>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";
