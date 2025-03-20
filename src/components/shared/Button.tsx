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
      className={`cursor-pointer opacity-75 transition-opacity duration-300 hover:opacity-100`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
