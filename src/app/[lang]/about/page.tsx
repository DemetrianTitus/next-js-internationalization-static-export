import { notFound } from "next/navigation";
import enTranslations from "@/translations/en.json";
import bsTranslations from "@/translations/bs.json";
import deTranslations from "@/translations/de.json";

// Static parameters for each language
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "bs" }, { lang: "de" }];
}

export default async function About({ params, }: { params: Promise<{ lang: string }>; }) {
  const { lang } = await params;
  let t;
  if (lang === "en") t = enTranslations.about;
  else if (lang === "bs") t = bsTranslations.about;
  else if (lang === "de") t = deTranslations.about;
  else notFound();

  const translationContent = { title: t.title, content: t.content };

  return (
    <>
      <h1>{translationContent.title}</h1>
      <p>{translationContent.content}</p>
    </>
  );
}
