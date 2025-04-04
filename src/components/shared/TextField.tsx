import { useFieldContext } from "@/hooks/useAppForm";
import { ChangeEvent } from "react";

interface TextFieldProps {
  placeholder: string;
  tabIndex: number;
  minLength?: number;
  maxLength?: number;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({
  placeholder,
  tabIndex,
  onChange,
  type,
  minLength,
  maxLength,
}: TextFieldProps) {
  const field = useFieldContext<string>();
  return (
    <input
      type={type ?? "text"}
      tabIndex={tabIndex}
      className="input w-full"
      placeholder={placeholder}
      onChange={(e) => {
        field.handleChange(e.target.value);
        if (onChange) onChange(e);
      }}
      name={field.name}
      value={field.state.value}
      onBlur={field.handleBlur}
      minLength={minLength}
      maxLength={maxLength}
    />
  );
}
