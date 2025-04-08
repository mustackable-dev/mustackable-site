import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  display: "swap",
  subsets: ["latin", "cyrillic"],
});

const nunitoMono = Nunito({
  variable: "--font-nunito-mono",
  display: "swap",
  subsets: ["latin", "cyrillic"],
});

export async function generateMetadata({
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${nunitoSans.variable} ${nunitoMono.variable} antialiased`}>
      <head>
        <style type="text/css" id="stackAnimations"></style>
      </head>
      <body>
        <ThemeProvider>
          <NextIntlClientProvider>
            <Header />
            <main className="px-4 pt-32 max-sm:px-3 max-sm:pt-16">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
