import React from "react";
import "./BlueText.scss";
import { useTranslation } from "react-i18next";

export const BlueText = () => {
  const { t } = useTranslation();

  return (
    <div className="ilios">
      <span className="tipio">{t("banner.main_title")}</span>
      <span className="bluchio">{t("banner.main_title")}</span>
    </div>
  );
};
