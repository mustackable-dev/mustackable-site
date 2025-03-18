import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="flex items-end justify-end pt-6">
      <p className="text-text-color">
        ©{new Date().getFullYear()} {t("footer.copyright")}
      </p>
    </footer>
  );
}
