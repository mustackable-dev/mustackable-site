import { useRef } from "react";
import { useSceneDataStore } from "../../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";

interface TextPanelProps {
  title: string;
  descriptionTexts: string[];
  textRight?: boolean;
  index: number;
}

export default function TextPanel({
  descriptionTexts,
  title,
  textRight = false,
  index,
}: TextPanelProps) {
  const { stackWithHaloWidth, delay } = useSceneDataStore(
    useShallow((s) => ({
      stackWithHaloWidth: s.sceneData?.stackWithHaloWidth,
      delay:
        (s.sceneData?.animationTimings[index] ?? 0) +
        (s.sceneData?.baseDelay ?? 0),
    })),
  );

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`theme-max-panel-width grid w-full grid-cols-3 items-center justify-between`}
      style={{
        height: stackWithHaloWidth,
        marginTop: (stackWithHaloWidth ?? 0) * 0.2,
        gap: (stackWithHaloWidth ?? 0) * 0.15,
      }}
    >
      <div className={`col-span-2 flex flex-col ${textRight ? "order-2" : ""}`}>
        <h2
          className={`font-black ${textRight ? "text-illuminate-heading-right animate-text-illuminate-right" : "text-illuminate-heading-left animate-text-illuminate-left"}`}
          style={{ animationDelay: `${delay.toString()}ms` }}
        >
          {title.toUpperCase()}
        </h2>
        <br />
        <div
          className={`flex flex-col ${
            textRight
              ? "text-illuminate-body-right animate-text-illuminate-right"
              : "text-illuminate-body-left animate-text-illuminate-left"
          }`}
          style={{ animationDelay: `${delay.toString()}ms` }}
        >
          {descriptionTexts.map((x, i) => (
            <div key={i}>
              <p className="font-normal">{x}</p>
              {i < descriptionTexts.length - 1 ? <br /> : null}
            </div>
          ))}
        </div>
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
