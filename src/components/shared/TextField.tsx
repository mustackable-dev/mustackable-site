import { useFieldContext } from "@/hooks/useAppForm";
import { ChangeEvent } from "react";

interface TextFieldProps {
  placeholder: string;
  tabIndex: number;
  minLength?: number;
  maxLength?: number;
  type?: string;
  errorMessage?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({
  placeholder,
  tabIndex,
  onChange,
  type,
  errorMessage,
  minLength,
  maxLength,
}: TextFieldProps) {
  const field = useFieldContext<string>();
  return (
    <div className="flex w-full flex-col">
      <p
        className={`text-red-500 ${field.state.meta.errors.length > 0 && field.state.meta.isBlurred ? "visible" : "invisible"} w-full`}
      >
        {errorMessage}
      </p>
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
    </div>
  );
}
