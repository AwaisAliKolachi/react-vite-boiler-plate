// src/hooks/useLanguage.ts
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: "en" | "fr") => {
    i18n.changeLanguage(lng);
  };

  return {
    currentLanguage: i18n.language,
    changeLanguage,
  };
};

