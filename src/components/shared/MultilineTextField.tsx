import { useFieldContext } from "@/hooks/useAppForm";
import { ChangeEvent } from "react";

interface MultilineTextFieldProps {
  placeholder: string;
  tabIndex: number;
  minLength?: number;
  maxLength?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextField({
  onChange,
  placeholder,
  tabIndex,
  minLength,
  maxLength,
}: MultilineTextFieldProps) {
  const field = useFieldContext<string>();
  return (
    <textarea
      tabIndex={tabIndex}
      className="input size-full"
      placeholder={placeholder}
      onChange={(e) => {
        field.handleChange(e.target.value);
        if (onChange) onChange(e);
      }}
      minLength={minLength}
      maxLength={maxLength}
      name={field.name}
      value={field.state.value}
      onBlur={field.handleBlur}
    />
  );
}
