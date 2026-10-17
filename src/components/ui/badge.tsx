import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors", {
  variants: {
    variant: {
      default: "border-cyan-300/20 bg-cyan-300/10 text-cyan-200",
      outline: "border-white/10 bg-white/[0.025] text-zinc-300",
    },
  },
  defaultVariants: { variant: "default" },
});

function Badge({ className, variant, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
