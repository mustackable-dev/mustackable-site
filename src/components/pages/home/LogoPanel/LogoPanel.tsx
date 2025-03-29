import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Level0 from "../../../../assets/images/stack_level_0.svg?react";
import { useLogoDataCalculation } from "../../../../hooks/useLogoDataCalculation";

export default function LogoPanel({ textRight = false, visible = false }) {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useLogoDataCalculation(ref);

  return (
    <div
      className={`${visible ? "visible" : "invisible"} grid w-full max-w-[902px] grid-cols-3 items-center justify-between gap-8`}
    >
      <p
        className={`${textRight ? "text-illuminate-heading-right animate-text-illuminate-right order-2" : "text-illuminate-heading-left animate-text-illuminate-left"} animation-delay-700 col-span-2 font-black`}
        style={{ fontSize: "clamp(0.1rem, 8vw, 4.7rem)" }}
      >
        {t("appName")}
      </p>
      <div
        ref={ref}
        className={`${textRight ? "order-1" : ""} animate-stack-radiate stack-illuminate-logo col-span-1 flex aspect-square items-center justify-center`}
      >
        <Level0 className="z-50 size-9/12" />
      </div>
    </div>
  );
}
