import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils"; // simple clsx helper, ya khud likh lo

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-700",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-sm font-medium transition-colors disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}