import { useTranslation } from "react-i18next";
import ContactBar from "../../shared/ContactBar";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="text-text-color flex justify-between px-4">
      <div className="flex flex-col gap-4">
        <div>
          <p>{t("footer.company-name")}</p>
          <p>{t("footer.company-address-1")}</p>
          <p>{t("footer.company-address-2")}</p>
          <p>{t("footer.company-address-3")}</p>
        </div>
        <ContactBar vertical={false} />
      </div>
      <p>
        ©{new Date().getFullYear()} {t("footer.company-name")}
      </p>
    </footer>
  );
}
