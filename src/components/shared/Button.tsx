import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ onClick, children, title, disabled = false }: ButtonProps) {
  return (
    <button
      className={`text-theme-secondary enabled:hover:text-theme-primary transition-colors duration-300 enabled:cursor-pointer disabled:opacity-50`}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
}
