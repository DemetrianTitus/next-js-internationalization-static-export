"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSelector() {
  const pathname = usePathname() || "";
  const router = useRouter();
  const segments = pathname.split("/").filter(Boolean);
  const currentLang = segments[0] || "bs"; // default to "bs" if not found
  const rest = segments.slice(1).join("/") || "";
  const languages = ["bs", "en", "de"];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    router.push(`/${selectedLang}/${rest}`);
  };

  return (
    <select value={currentLang} onChange={handleChange}>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
