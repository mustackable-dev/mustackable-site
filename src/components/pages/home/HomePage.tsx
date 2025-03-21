import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div>
      {t("body.section-1-title")}

      {t("body.section-1-1")}

      {t("body.section-1-2")}

      {t("body.section-2-title")}

      {t("body.section-2-1")}

      {t("body.section-2-2")}

      {t("body.section-3-title")}

      {t("body.section-3-1")}

      {t("body.section-3-2")}

      {t("body.section-4-title")}
    </div>
  );
}
