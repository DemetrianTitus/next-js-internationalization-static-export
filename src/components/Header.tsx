"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelector from "@/components/LanguageSelector";
import enTranslations from "@/translations/en.json";
import bsTranslations from "@/translations/bs.json";
import deTranslations from "@/translations/de.json";

export default function Header() {
  const pathname = usePathname() || "";
  const segments = pathname.split("/").filter(Boolean);
  const lang = segments[0] || "bs"; // default language if not set

  let headerText;
  if (lang === "en") headerText = enTranslations.header;
  else if (lang === "bs") headerText = bsTranslations.header;
  else if (lang === "de") headerText = deTranslations.header;
  else headerText = bsTranslations.header;

  return (
    <header style={{ display: "flex", justifyContent:"space-between", alignItems:"center", padding:"1rem", backgroundColor:"#f5f5f5" }}>
      <nav>
        <Link href={`/${lang}/home`} style={{ marginRight: "1rem" }}>{headerText.home}</Link>
        <Link href={`/${lang}/about`} style={{ marginRight: "1rem" }}>{headerText.about}</Link>
        <Link href={`/${lang}/contact`}>{headerText.contact}</Link>
      </nav>
      <div>
        <LanguageSelector />
      </div>
    </header>
  );
}
