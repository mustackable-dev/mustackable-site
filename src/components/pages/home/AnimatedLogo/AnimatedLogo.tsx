import Level0 from "../../../../assets/images/stack_level_0.svg?react";
import Level1 from "../../../../assets/images/stack_level_1.svg?react";
import Level2 from "../../../../assets/images/stack_level_2.svg?react";
import Level3 from "../../../../assets/images/stack_level_3.svg?react";
import Level4 from "../../../../assets/images/stack_level_4.svg?react";
import { useSceneDataStore } from "../../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";

export default function AnimatedLogo() {
  const { stackWidth, stackGap, baseDelay } = useSceneDataStore(
    useShallow((s) => ({
      stackWidth: s.sceneData?.stackWidth ?? 0,
      stackGap: s.sceneData?.stackGap ?? 0,
      baseDelay: s.sceneData?.baseDelay ?? 0,
    })),
  );

  return (
    <div className="relative" style={{ left: -stackWidth / 2 }}>
      <Level0
        className="absolute z-50 aspect-square"
        style={{
          width: stackWidth,
          animation: "stack-0 1s ease forwards",
          animationDelay: `${baseDelay.toString()}ms`,
        }}
      />
      <Level1
        className="absolute z-40 aspect-square"
        style={{
          width: stackWidth,
          top: stackGap,
          animation: "stack-1 1.5s ease forwards",
          animationDelay: `${baseDelay.toString()}ms`,
        }}
      />
      <Level2
        className="absolute z-30 aspect-square"
        style={{
          width: stackWidth,
          top: stackGap * 2,
          animation: "stack-2 1.5s ease forwards",
          animationDelay: `${baseDelay.toString()}ms`,
        }}
      />
      <Level3
        className="absolute z-20 aspect-square"
        style={{
          width: stackWidth,
          top: stackGap * 3,
          animation: "stack-3 1.5s ease forwards",
          animationDelay: `${baseDelay.toString()}ms`,
        }}
      />
      <Level4
        className="absolute z-10 aspect-square"
        style={{
          width: stackWidth,
          top: stackGap * 4,
          animation: "stack-4 1s ease forwards",
          animationDelay: `${baseDelay.toString()}ms`,
        }}
      />
    </div>
  );
}
