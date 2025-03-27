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
  textRight = false
}: TextPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { shown } = useShown(ref);
  return (
    <div
      ref={ref}
      className="grid max-w-[902px] w-full grid-cols-3 items-center justify-between"
    >
      <div className={`col-span-2 flex flex-col gap-8 ${textRight ? "order-2": ""}`}>
        <p
          className={`text-3xl font-black ${shown ? "text-illuminate-heading animation-delay-700 animate-text-illuminate" : "invisible"}`}
        >
          {title.toUpperCase()}
        </p>
        <div
          className={`flex flex-col gap-8 ${
            shown
              ? "text-illuminate-body animate-text-illuminate animation-delay-700"
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
        className={`${shown ? "animate-stack-radiate size-60 col-span-1 flex justify-center items-center stack-illuminate-normal": "invisible"} ${textRight ? "order-1":""}`}
      >
        <Stack className="z-10 w-44" />
      </div>
    </div>
  );
}
