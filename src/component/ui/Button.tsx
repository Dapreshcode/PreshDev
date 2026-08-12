  import Link from "next/link";
  import { ReactNode } from "react";
  import { MouseEventHandler } from "react";

  interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary" | "ghost";

    className?: string;

    onClick?: MouseEventHandler<HTMLButtonElement>;

    disabled?: boolean;

    type?: "button" | "submit";
  }

  const variants = {
    primary:
      "bg-yellow-400 text-slate-950 hover:bg-yellow-300",
    secondary:
      "border border-slate-700 bg-slate-900 text-white hover:border-yellow-400 hover:text-yellow-400",
    ghost:
      "text-slate-300 hover:text-yellow-400",
  };

  export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
    onClick,
    disabled = false,
    type = "button",
  }: ButtonProps) {

    const baseStyles =
      "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";
    const disabledStyles = disabled
    ? "cursor-not-allowed opacity-50"
    : "";

    const styles = `
    ${baseStyles}
    ${variants[variant]}
    ${disabledStyles}
    ${className}
  `;
    if (href) {
      return (
        <Link href={href} className={styles}>
          {children}
        </Link>
      );
    }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
  }