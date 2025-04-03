import { useTranslations } from "next-intl";
import { useSceneDataStore } from "../../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";

export default function LogoPanel({ textRight = false }) {
  const t = useTranslations("common");
  const { stackWithHaloWidth, referenceStack, delay } = useSceneDataStore(
    useShallow((s) => ({
      stackWithHaloWidth: s.sceneData?.stackWithHaloWidth,
      referenceStack: s.referenceStack,
      delay: (s.sceneData?.animationTimings[0] ?? 0) + (s.sceneData?.baseDelay ?? 0),
    })),
  );

  const shineDelay = 400;

  return (
    <div
      className={`theme-max-panel-width grid w-full grid-cols-3 items-center justify-between`}
      style={{
        height: stackWithHaloWidth,
        gap: (stackWithHaloWidth ?? 0) * 0.15,
      }}
    >
      <div className={`col-span-2 flex flex-col ${textRight ? "order-2" : ""}`}>
        <div
          className={textRight ? "fade-in-panel-right" : "fade-in-panel-left"}
          style={{ animationDelay: `${(delay + shineDelay).toString()}ms` }}
        />
        <h1
          className={`${textRight ? "order-2" : ""} text-theme-text-heading -z-2 col-span-2 font-black`}
        >
          {t("appName")}
        </h1>
      </div>
      <div
        className={`${textRight ? "order-1" : ""} animate-stack-radiate stack-illuminate-logo col-span-1 flex aspect-square items-center justify-center`}
        style={{
          animationDelay: `${delay.toString()}ms`,
        }}
        ref={referenceStack}
      />
    </div>
  );
}
