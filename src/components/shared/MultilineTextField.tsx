import { useFieldContext } from "@/hooks/useAppForm";
import { ChangeEvent } from "react";

interface MultilineTextFieldProps {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  tabIndex: number;
  errorMessage?: string;
  resize?: boolean;
  minLength?: number;
  maxLength?: number;
}

export default function TextField({
  onChange,
  placeholder,
  tabIndex,
  errorMessage,
  resize,
  minLength,
  maxLength,
}: MultilineTextFieldProps) {
  const field = useFieldContext<string>();
  return (
    <div className="flex size-full flex-col">
      <p
        className={`text-red-500 ${field.state.meta.errors.length > 0 && field.state.meta.isBlurred ? "visible" : "invisible"} w-full`}
      >
        {errorMessage}
      </p>
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
        style={{ resize: resize ? "both" : "none" }}
      />
    </div>
  );
}
