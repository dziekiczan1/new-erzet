import * as React from "react";

function Input({ type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className="aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:border-destructive disabled:bg-foreground/50
      px-4 h-10 rounded-lg border border-primary/80 bg-transparent text-sm text-light placeholder:text-light/80 w-full outline-none
      disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
      {...props}
    />
  );
}

export { Input };
