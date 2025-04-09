'use server'

import { isDomainBlacklistedFull } from "@/assets/lists/blacklistedDomainsFull";
import { ContactFormData } from "@/types/ContactFormData";
import { getTranslations } from "next-intl/server";
import nodemailer, { Transporter } from "nodemailer";
import { MESSAGE_RECEIVED_TEMPLATE } from "@/assets/templates/MessageReceived";
import { convertNewLinesToBreaks } from "@/utilities/Common";

const transport: Transporter = nodemailer.createTransport({
    pool: true,
    host: process.env.MUSTACKABLE_DEV_HOST ?? "",
    port: Number(process.env.MUSTACKABLE_DEV_SMTP_PORT),
    secure: true,
    auth: {
        user: (process.env.MUSTACKABLE_DEV_USERNAME ?? ""),
        pass: (process.env.MUSTACKABLE_DEV_PASSWORD ?? "")
    },
});

export async function processContactForm(data: ContactFormData, locale: string): Promise<boolean> {
    if (isDomainBlacklistedFull(data.email)) return Promise.resolve(false);
    const tFooter = await getTranslations({ locale, namespace: "footer" });
    const t = await getTranslations({ locale, namespace: "emails.message-received" });

    //Internal email

    const notificationBody = `FROM: ${data.email}\r\n\r\nMESSAGE:\r\n\r\n${data.message}`;

    await transport.sendMail({
        from: process.env.MUSTACKABLE_DEV_USERNAME,
        to: process.env.MUSTACKABLE_DEV_HANDLER,
        subject: `New Contact Form Received - ${(new Date).toISOString()}`,
        text: notificationBody
    })

    //Visitor email

    const emailBody = MESSAGE_RECEIVED_TEMPLATE
        .replaceAll("{{thank-you}}", t('thank-you'))
        .replaceAll("{{message-received}}", t('message-received'))
        .replaceAll("{{message-body}}", convertNewLinesToBreaks(data.message))
        .replaceAll("{{closing-paragraph}}", t('closing-paragraph'))
        .replaceAll("{{trademark}}", `${tFooter("trademark-notice")} ${tFooter("company-name")}`)
        .replaceAll("{{copyright}}", `© ${new Date().getFullYear().toString()} ${tFooter("company-name")}. ${tFooter("rights")}.`);

    await transport.sendMail({
        from: process.env.MUSTACKABLE_DEV_USERNAME,
        to: data.email,
        subject: t('subject'),
        html: emailBody,
    })
    return Promise.resolve(true);
}