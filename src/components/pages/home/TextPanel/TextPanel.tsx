import { FunctionComponent, SVGProps, useRef } from "react";
import { useShown } from "../../../../hooks/useIntersection";

interface TextPanelProps {
  title: string;
  descriptionTexts: string[];
  Stack: FunctionComponent<SVGProps<SVGSVGElement>>;
  textRight?: boolean;
}

export default function TextPanel({
  descriptionTexts,
  title,
  Stack,
  textRight = false,
}: TextPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { shown } = useShown(ref);
  return (
    <div
      ref={ref}
      className="grid w-full max-w-[902px] grid-cols-3 items-center justify-between gap-8"
    >
      <div
        className={`animation-delay-700 col-span-2 flex flex-col gap-8 ${textRight ? "order-2" : ""}`}
      >
        <p
          className={`text-3xl font-black ${shown ? (textRight ? "text-illuminate-heading-right animate-text-illuminate-right" : "text-illuminate-heading-left animate-text-illuminate-left") : "invisible"}`}
        >
          {title.toUpperCase()}
        </p>
        <div
          className={`flex flex-col gap-8 ${
            shown
              ? textRight
                ? "text-illuminate-body-right animate-text-illuminate-right"
                : "text-illuminate-body-left animate-text-illuminate-left"
              : "invisible"
          }`}
        >
          {descriptionTexts.map((x, i) => (
            <p className="text-xl font-normal" key={i}>
              {x}
            </p>
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
