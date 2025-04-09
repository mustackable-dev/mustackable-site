import { useFormContext } from "@/hooks/useAppForm";

interface FormSubmitButtonProps {
  label: string;
  onClick?: () => void;
}

export default function FormSubmitButton({ label, onClick }: FormSubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => [state.isValid && !state.isPristine, state.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          onClick={onClick}
          className={`border-theme-secondary enabled:hover:border-theme-primary enabled:hover:text-theme-primary rounded-sm border-1 px-4 py-2 shadow-sm transition-colors duration-300 enabled:cursor-pointer disabled:opacity-50 max-sm:p-1`}
        >
          <span>{isSubmitting ? "..." : label}</span>
        </button>
      )}
    </form.Subscribe>
  );
}
