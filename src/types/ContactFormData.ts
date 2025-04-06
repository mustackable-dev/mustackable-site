import { isDomainBlacklistedShort } from '@/assets/lists/blacklistedDomainsShortlist';
import { z } from 'zod';

export const contactFormDataSchema = z.object({
    name: z.string().min(3).max(200),
    email: z.string().email().max(200).refine(x => !isDomainBlacklistedShort(x)),
    message: z.string().min(50).max(1000),
});

export type ContactFormData = z.infer<typeof contactFormDataSchema>;