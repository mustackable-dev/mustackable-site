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
      className="grid w-full grid-cols-3 items-center justify-between"
    >
      <div className={`col-span-2 flex flex-col gap-8 ${textRight ? "order-2": ""}`}>
        <p
          className={`text-3xl font-black ${shown ? "text-illuminate-100 animation-delay-500 animate-text-illuminate" : "invisible"}`}
        >
          {title.toUpperCase()}
        </p>
        <div
          className={`flex flex-col gap-8 ${
            shown
              ? "text-illuminate-75 animate-text-illuminate animation-delay-500"
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
        className={`${shown ? "animate-stack-radiate col-span-1 flex justify-center bg-radial from-[rgb(135,205,222)] to-transparent to-70% bg-no-repeat": "invisible"} ${textRight ? "order-1":""}`}
      >
        <Stack className="z-10 size-52" />
      </div>
    </div>
  );
}
