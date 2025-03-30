import { FunctionComponent, SVGProps, useRef } from "react";
import { useShown } from "../../../../hooks/useShown";
import { useSceneDataStore } from "../../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";
import { useAnimatedLogo } from "../../../../hooks/useAnimatedLogo";

interface TextPanelProps {
  title: string;
  descriptionTexts: string[];
  Stack: FunctionComponent<SVGProps<SVGSVGElement>>;
  textRight?: boolean;
  visible?: boolean;
  sequenceIndex: number;
}

export default function TextPanel({
  descriptionTexts,
  title,
  Stack,
  textRight = false,
  visible = false,
  sequenceIndex = 0,
}: TextPanelProps) {
  const { stackWithHaloWidth } = useSceneDataStore(
    useShallow((s) => ({
      stackWithHaloWidth: s.sceneData?.stackWithHaloWidth,
    })),
  );

  const { triggerAnimationStep } = useAnimatedLogo();

  const ref = useRef<HTMLDivElement>(null);
  const { shown } = useShown(ref, () => {
    triggerAnimationStep(sequenceIndex);
  });

  return (
    <div
      ref={ref}
      className={`${visible ? "visible" : "invisible"} theme-max-panel-width grid w-full grid-cols-3 items-center justify-between`}
      style={{
        height: stackWithHaloWidth,
        marginTop: (stackWithHaloWidth ?? 0) * 0.2,
        gap: (stackWithHaloWidth ?? 0) * 0.15,
      }}
    >
      <div
        className={`animation-delay-700 col-span-2 flex flex-col ${textRight ? "order-2" : ""}`}
      >
        <h2
          className={`font-black ${shown ? (textRight ? "text-illuminate-heading-right animate-text-illuminate-right" : "text-illuminate-heading-left animate-text-illuminate-left") : "invisible"}`}
        >
          {title.toUpperCase()}
        </h2>
        <br />
        <div
          className={`flex flex-col ${
            shown
              ? textRight
                ? "text-illuminate-body-right animate-text-illuminate-right"
                : "text-illuminate-body-left animate-text-illuminate-left"
              : "invisible"
          }`}
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
        className={`${shown ? "animate-stack-radiate stack-illuminate-normal col-span-1 flex aspect-square items-center justify-center" : "invisible"} ${textRight ? "order-1" : ""}`}
      >
        <Stack className="size-9/12" />
      </div>
    </div>
  );
}
