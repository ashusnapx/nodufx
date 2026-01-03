import React from "react";
import { cn } from "@/utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ id, className, children, fullWidth = false, ...props }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn("relative py-24 md:py-32 overflow-hidden", className)}
        {...props}
      >
        <div
          className={cn(
            "mx-auto px-6 md:px-12 w-full",
            !fullWidth && "max-w-7xl"
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";
