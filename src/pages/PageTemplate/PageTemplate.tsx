import "./PageTemplate.css";
import usePageTemplate from "./usePageTemplate";

export default function PageTemplate() {
  const { theme, toggleTheme, changeLanguage, currentLanguage, t } =
    usePageTemplate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-600">{t("PageTemplate")}</h1>
    </div>
  );
}
