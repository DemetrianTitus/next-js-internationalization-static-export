import { notFound } from "next/navigation";
import enTranslations from "@/translations/en.json";
import bsTranslations from "@/translations/bs.json";
import deTranslations from "@/translations/de.json";

// Static parameters for each language
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bs" }, { lang: "de" }];
}

export default async function Contact({ params, }: { params: Promise<{ lang: string }>; }) {
  const { lang } = await params;
  let t;
  if (lang === "en") t = enTranslations.contact;
  else if (lang === "bs") t = bsTranslations.contact;
  else if (lang === "de") t = deTranslations.contact;
  else notFound();

  return (
    <>
      <h1>{t.title}</h1>
      <p>{t.content}</p>
    </>
  );
}
