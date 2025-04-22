
import React from "react";
import { cn } from "@/lib/utils";

const GlassCard = ({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/25 backdrop-blur-md border border-white/30 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;

