import { z } from 'zod';

export const contactFormDataSchema = z.object({
    name: z.string().max(200),
    email: z.string().email().max(200),
    message: z.string().min(50).max(1000),
});

export type ContactFormData = z.infer<typeof contactFormDataSchema>;