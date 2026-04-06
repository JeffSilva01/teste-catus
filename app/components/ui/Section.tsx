import { cn } from "@/app/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "white" | "primary";
}

export function Section({
  id,
  children,
  className,
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-16 lg:py-20",
        {
          "bg-[var(--color-background)]": background === "default",
          "bg-[var(--color-surface)]": background === "white",
          "bg-[var(--color-primary)]": background === "primary",
        },
        className
      )}
    >
      {children}
    </section>
  );
}
