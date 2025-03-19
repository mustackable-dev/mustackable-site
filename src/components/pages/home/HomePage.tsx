import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center">
      <h1 className="font-nunito text-text-color w-1/2 text-center text-5xl font-black">
        {t("appName")}
      </h1>
    </div>
  );
}
