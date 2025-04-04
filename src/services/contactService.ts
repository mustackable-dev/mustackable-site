'use server'

import { ContactFormData } from "@/types/ContactFormData";

export async function processContactForm(data: ContactFormData): Promise<boolean> {
    console.log(data);
    return Promise.resolve(true);
}