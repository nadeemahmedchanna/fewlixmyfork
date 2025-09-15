import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

const taglineVariants = cva(
  "flex items-center justify-center text-sm font-medium w-fit gap-1 [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-background border shadow-xs px-2.5 rounded-md h-7",
        ghost: "bg-transparent text-muted-foreground",
        white: "text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Tagline({ className = "", variant, asChild = false, children, ...props }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={`${taglineVariants({ variant })} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Tagline, taglineVariants };
