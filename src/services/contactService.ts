'use server'

import { isDomainBlacklistedFull } from "@/assets/lists/blacklistedDomainsFull";
import { ContactFormData } from "@/types/ContactFormData";
import nodemailer, { Transporter } from 'nodemailer';

const transport: Transporter = nodemailer.createTransport({
    pool: true,
    host: process.env.HOST ?? "",
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: (process.env.USERNAME ?? ""),
        pass: (process.env.PASSWORD ?? "")
    },
});

export async function processContactForm(data: ContactFormData): Promise<boolean> {
    if (isDomainBlacklistedFull(data.email)) return Promise.resolve(false);
    await transport.sendMail({
        from: process.env.USERNAME,
        to: data.email,
        subject: "Test",
        html: `<p>From: ${data.name} Message: ${data.message}</p>`,
    })
    return Promise.resolve(true);
}