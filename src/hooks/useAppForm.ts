import MultilineTextField from '@/components/shared/MultilineTextField';
import FormSubmitButton from '@/components/shared/FormSubmitButton';
import TextField from '@/components/shared/TextField';
import { createFormHook, createFormHookContexts } from '@tanstack/react-form';

export const { fieldContext, formContext, useFieldContext, useFormContext } = createFormHookContexts();

export const { useAppForm } = createFormHook({
    fieldComponents: {
        TextField,
        MultilineTextField,
    },
    formComponents: {
        FormSubmitButton,
    },
    fieldContext,
    formContext,
});