import { MouseEventHandler } from "react";

interface ButtonProps {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  standardIcon?: boolean;
  disabled?: boolean;
}

export default function Button({
  onClick,
  children,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer transition-colors duration-300 text-theme-secondary hover:text-theme-primary`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
