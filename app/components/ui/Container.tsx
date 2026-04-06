import { cn } from "@/app/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  children: ReactNode;
  className?: string;
}

export function Container({
  size = "lg",
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        {
          "max-w-screen-sm": size === "sm",
          "max-w-screen-md": size === "md",
          "max-w-screen-lg": size === "lg",
          "max-w-screen-xl": size === "xl",
          "max-w-full": size === "full",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
