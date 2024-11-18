import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import TypoNav from "@/components/ui/typonav";

export default async function Layout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as "en" | "da")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex flex-col">
        <TypoNav />
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
