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
      className={`text-theme-secondary hover:text-theme-primary cursor-pointer transition-colors duration-300`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
