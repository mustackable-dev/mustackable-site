import { MouseEventHandler } from "react";

interface ButtonProps {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  standardIcon?: boolean;
  disabled?: boolean;
}

export default function Button({ onClick, children, disabled = false }: ButtonProps) {
  return (
    <button
      className={`text-theme-secondary enabled:hover:text-theme-primary transition-colors duration-300 enabled:cursor-pointer disabled:opacity-50`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
