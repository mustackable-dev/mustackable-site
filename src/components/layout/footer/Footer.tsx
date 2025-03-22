import { useTranslation } from "react-i18next";
import ContactBar from "../../shared/ContactBar";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="flex items-center justify-between p-4 max-md:flex-col max-md:gap-12">
      <div className="flex flex-col gap-2 max-md:w-full max-md:items-center">
        <p>{t("footer.company-address-1")}</p>
        <p>{t("footer.company-address-2")}</p>
        <p>{t("footer.company-address-3")}</p>
        <ContactBar vertical={false} />
      </div>
      <div className="text-right italic max-md:w-full max-md:text-center">
        <p className="pb-2">
          {t("footer.trademark-notice")} {t("footer.company-name")}.
        </p>
        <p>
          © {new Date().getFullYear()} {t("footer.company-name")}.{" "}
          {t("footer.rights")}.
        </p>
      </div>
    </footer>
  );
}
