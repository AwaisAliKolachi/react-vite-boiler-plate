//PageTemplate
import { useTheme } from "@src/hooks";
import { useLanguage } from "@src/hooks/useLanguage";
import { appServices } from "@src/services";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const usePageTemplate = () => {
  const services = appServices; // API Services
  const navigate = useNavigate();
  const { mode, toggleTheme, isDark } = useTheme();
  const { changeLanguage, currentLanguage } = useLanguage();
  const { t } = useTranslation();

  {
    /* 
    Your code here, handle all the logic related to the page here.
    Do not use state or effects in this hooks page file (PageTemplate.tsx)
    Use states and effects, api calls, events here.
    */
  }

  return {
    navigate,
    theme: mode,
    isDark,
    toggleTheme,
    changeLanguage,
    currentLanguage,
    t,
  };
};

export default usePageTemplate;
