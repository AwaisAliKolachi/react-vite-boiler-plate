import React from "react";
import { useTranslation } from "react-i18next";
// import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-[100vh] flex content-center ">
        <div className="mx-auto max-w-screen-sm text-center flex content-center justify-center items-center flex-col">
          <p className="mb-4 lg:text-9xl inter-800 primary-color">404</p>
          <p className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl ">
            {t("notFound.title")}
          </p>
          <p className="mb-4 text-lg inter-400 ">
            {t("notFound.description")}{" "}
          </p>
          {/* <Button buttonText={t("notFound.backButton")} width="150px" onClick={() => navigate("/")} /> */}
        </div>
      </div>
    </section>
  );
}
