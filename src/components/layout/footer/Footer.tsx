import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="flex items-end justify-end pt-6">
      <p className="text-text">
        ©{new Date().getFullYear()} {t("footer.copyright")}
      </p>
    </div>
  );
}
