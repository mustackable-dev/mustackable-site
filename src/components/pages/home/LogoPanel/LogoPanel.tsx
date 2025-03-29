import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Level0 from "../../../../assets/images/stack_level_0.svg?react";
import { useLogoDataCalculation } from "../../../../hooks/useLogoDataCalculation";
import { useAnimationDataStore } from "../../../../stores/AnimationDataStore";
import { useShallow } from "zustand/shallow";

export default function LogoPanel({ textRight = false, visible = false }) {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const { stackWithHaloWidth } = useAnimationDataStore(
    useShallow((s) => ({
      stackWithHaloWidth: s.logoData?.stackWithHaloWidth,
    })),
  );

  useLogoDataCalculation(ref);

  return (
    <div
      className={`${visible ? "visible" : "invisible"} theme-max-panel-width grid w-full grid-cols-3 items-center justify-between`}
      style={{
        height: stackWithHaloWidth,
        gap: (stackWithHaloWidth ?? 0) * 0.15,
      }}
    >
      <h1
        className={`${textRight ? "text-illuminate-heading-right animate-text-illuminate-right order-2" : "text-illuminate-heading-left animate-text-illuminate-left"} animation-delay-700 col-span-2 font-black`}
      >
        {t("appName")}
      </h1>
      <div
        ref={ref}
        className={`${textRight ? "order-1" : ""} animate-stack-radiate stack-illuminate-logo col-span-1 flex aspect-square items-center justify-center`}
      >
        <Level0 className="z-50 size-9/12" />
      </div>
    </div>
  );
}
