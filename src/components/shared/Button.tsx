import { MouseEventHandler } from "react";

interface ButtonProps {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  standardIcon?: boolean;
  // className?: string;
  disabled?: boolean;
}

export default function Button({
  onClick,
  children,
  disabled = false,
  // className = "",
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer transition-opacity duration-300 hover:opacity-75`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
