import { useTranslation } from "react-i18next";
import { useSceneDataStore } from "../../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";

export default function LogoPanel({ textRight = false }) {
  const { t } = useTranslation();
  const { stackWithHaloWidth, referenceStack, delay } = useSceneDataStore(
    useShallow((s) => ({
      stackWithHaloWidth: s.sceneData?.stackWithHaloWidth,
      referenceStack: s.referenceStack,
      delay:
        (s.sceneData?.animationTimings[0] ?? 0) + (s.sceneData?.baseDelay ?? 0),
    })),
  );

  return (
    <div
      className={`theme-max-panel-width grid w-full grid-cols-3 items-center justify-between`}
      style={{
        height: stackWithHaloWidth,
        gap: (stackWithHaloWidth ?? 0) * 0.15,
      }}
    >
      <h1
        className={`${textRight ? "text-illuminate-heading-right animate-text-illuminate-right order-2" : "text-illuminate-heading-left animate-text-illuminate-left"} col-span-2 font-black`}
        style={{ animationDelay: `${(delay + 700).toString()}ms` }}
      >
        {t("appName")}
      </h1>
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
