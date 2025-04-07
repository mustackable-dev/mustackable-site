import { useSceneDataStore } from "@/hooks/useSceneDataStore";
import { useShallow } from "zustand/shallow";

interface TextPanelProps {
  title: string;
  descriptionTexts: string[];
  textRight?: boolean;
  index: number;
  children?: React.ReactNode;
}

export default function TextPanel({
  descriptionTexts,
  title,
  textRight = false,
  index,
  children,
}: TextPanelProps) {
  const { stackWithHaloWidth, delay } = useSceneDataStore(
    useShallow((s) => ({
      stackWithHaloWidth: s.sceneData?.stackWithHaloWidth,
      delay: (s.sceneData?.animationTimings[index] ?? 0) + 100 + (s.sceneData?.baseDelay ?? 0),
    })),
  );

  const shineDelay = 400;

  return (
    <div
      className={`theme-max-panel-width grid w-full grid-cols-3 items-center justify-between`}
      style={{
        height: stackWithHaloWidth,
        marginTop: (stackWithHaloWidth ?? 0) * 0.2,
        gap: (stackWithHaloWidth ?? 0) * 0.15,
      }}
    >
      <div className={`col-span-2 flex flex-col ${textRight ? "order-2" : ""}`}>
        <div
          className={textRight ? "fade-in-panel-right" : "fade-in-panel-left"}
          style={{ animationDelay: `${(delay + shineDelay).toString()}ms` }}
        />
        <h2 className="text-theme-text-heading -z-2 font-black">{title.toUpperCase()}</h2>
        <br />
        <div className="-z-2 flex flex-col">
          {descriptionTexts.map((x, i) => (
            <div key={i}>
              <p className="font-normal">{x}</p>
              {i < descriptionTexts.length - 1 ? <br /> : null}
            </div>
          ))}
        </div>
        {children}
      </div>
      <div
        className={`animate-stack-radiate stack-illuminate-normal col-span-1 flex aspect-square items-center justify-center ${textRight ? "order-1" : ""}`}
        style={{
          animationDelay: `${delay.toString()}ms`,
        }}
      >
        {/* <Stack className="size-9/12" /> */}
      </div>
    </div>
  );
}
