import "./About.css";
import useAbout from "./useAbout";

export default function About() {
  const { theme,t, currentLanguage } = useAbout();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-600">{t("AboutUs")}</h1>
      <h1 className="text-4xl font-bold text-blue-600">{theme}</h1>
      <h1 className="text-4xl font-bold text-blue-600">{currentLanguage}</h1>
    </div>
  );
}
