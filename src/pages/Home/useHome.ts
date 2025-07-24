import { useTheme } from "@src/hooks";
import { useLanguage } from "@src/hooks/useLanguage";
import { appServices } from "@src/services";
import { setAuthTokens } from "@src/store";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useHome = () => {
    const services = appServices; // API Services
  const navigate = useNavigate();
  const { mode, toggleTheme, isDark } = useTheme();
  const { changeLanguage, currentLanguage } = useLanguage();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const toggleLanguage = useCallback(() => {
    changeLanguage(currentLanguage === "en" ? "fr" : "en");
  }, [currentLanguage, changeLanguage]);

  const handleLogin = useCallback(() => {
    dispatch(
      setAuthTokens({
        accessToken: "your_access_token",
        refreshToken: "your_refresh_token",
      })
    );
    navigate("/about");
  }, [dispatch]);

  return {
    navigate,
    theme: mode,
    isDark,
    toggleTheme,
    toggleLanguage,
    currentLanguage,
    t,
    handleLogin,
  };
};

export default useHome;
