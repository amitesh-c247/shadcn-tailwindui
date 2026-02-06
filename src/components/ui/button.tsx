import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary-gradient text-primary-foreground shadow-primary hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-secondary-gradient text-secondary-foreground shadow-secondary hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        hero:
          "bg-primary-gradient text-primary-foreground px-8 py-6 text-base shadow-primary hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
        heroOutline:
          "border border-border bg-background text-foreground hover:bg-muted px-8 py-6 text-base",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-primary-gradient hover:text-primary-foreground hover:border-transparent",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
