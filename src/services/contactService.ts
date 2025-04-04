'use server'

import { isDomainBlacklistedFull } from "@/assets/lists/blacklistedDomainsFull";
import { ContactFormData } from "@/types/ContactFormData";

export async function processContactForm(data: ContactFormData): Promise<boolean> {
    return Promise.resolve(isDomainBlacklistedFull(data.email));
}