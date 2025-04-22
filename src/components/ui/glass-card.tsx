
import React from "react"
import { cn } from "@/lib/utils"

const GlassCard = ({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/30 backdrop-blur-lg border border-white/40 shadow-lg shadow-crimson-red/30",
        className
      )}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        boxShadow:
          "0 8px 32px 0 rgba(239, 65, 53, 0.25), 0 0 10px 2px rgba(0, 85, 164, 0.2)",
        borderColor: "rgba(255, 255, 255, 0.4)",
      }}
    >
      {children}
    </div>
  )
}

export default GlassCard

