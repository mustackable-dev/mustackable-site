import Level0 from "../../../../assets/images/stack_level_0.svg?react";
import Level1 from "../../../../assets/images/stack_level_1.svg?react";
import Level2 from "../../../../assets/images/stack_level_2.svg?react";
import Level3 from "../../../../assets/images/stack_level_3.svg?react";
import Level4 from "../../../../assets/images/stack_level_4.svg?react";
import MagicWand from "../../../../assets/images/magic_wand.svg?react";
// import Touch from "../../../../assets/images/touch.svg?react";

import { useSceneDataStore } from "../../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";

export default function AnimatedLogo() {
  const { stackWidth, stackGap } = useSceneDataStore(
    useShallow((s) => ({
      stackWidth: s.sceneData?.stackWidth ?? 0,
      stackGap: s.sceneData?.stackGap ?? 0,
      baseDelay: s.sceneData?.baseDelay ?? 0,
    })),
  );

  return (
    <div className="animate-fade-in relative" style={{ left: -stackWidth / 2 }}>
      <Level0
        className="stack-0-animation absolute z-50 aspect-square"
        style={{
          width: stackWidth,
        }}
      />
      <Level1
        className="stack-1-animation absolute z-40 aspect-square"
        style={{
          width: stackWidth,
          top: stackGap,
        }}
      />
      <Level2
        className="stack-2-animation absolute z-30 aspect-square"
        style={{
          width: stackWidth,
          top: stackGap * 2,
        }}
      />
      <Level3
        className="stack-3-animation absolute z-20 aspect-square"
        style={{
          width: stackWidth,
          top: stackGap * 3,
        }}
      />
      <Level4
        className="stack-4-animation absolute z-10 aspect-square"
        style={{
          width: stackWidth,
          top: stackGap * 4,
        }}
      />
      <div className="wand-animation">
        <MagicWand />
        {/* <Touch className="wand-tap" /> */}
      </div>
    </div>
  );
}
