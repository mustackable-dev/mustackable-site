import { JSX } from "react";
import Level0 from "../../../../assets/images/stack_level_0.svg?react";
import Level1 from "../../../../assets/images/stack_level_1.svg?react";
import Level2 from "../../../../assets/images/stack_level_2.svg?react";
import Level3 from "../../../../assets/images/stack_level_3.svg?react";
import Level4 from "../../../../assets/images/stack_level_4.svg?react";
import Placeholder from "../../../../assets/images/stack_placeholder.svg?react";
import { useSceneDataStore } from "../../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";

export default function AnimatedLogo() {
  const { stackWidth, stackGap, animationSteps, currentStack, logoElement } =
    useSceneDataStore(
      useShallow((s) => ({
        stackWidth: s.sceneData?.stackWidth ?? 0,
        stackGap: s.sceneData?.stackGap ?? 0,
        animationSteps: s.sceneData?.animationSteps,
        currentStack: s.currentStack,
        logoElement: s.logoElementRef,
      })),
    );

  function GenerateLogo() {
    const renderArray: JSX.Element[] = [];
    switch (currentStack) {
      case 0:
        renderArray.push(
          <Level0
            className="absolute z-40 aspect-square"
            key="0"
            style={{ width: stackWidth }}
          />,
        );
        break;
      case 1:
        renderArray.push(
          <Level1
            className="absolute z-40 aspect-square"
            key="1"
            style={{ width: stackWidth }}
          />,
        );
        break;
      case 2:
        renderArray.push(
          <Level2
            className="absolute z-40 aspect-square"
            key="2"
            style={{ width: stackWidth }}
          />,
        );
        break;
      case 3:
        renderArray.push(
          <Level3
            className="absolute z-40 aspect-square"
            key="3"
            style={{ width: stackWidth }}
          />,
        );
        break;
      case 4:
        renderArray.push(
          <Level4
            className="absolute z-40 aspect-square"
            key="4"
            style={{ width: stackWidth }}
          />,
        );
        break;
    }
    if (currentStack < 4) {
      renderArray.push(
        <Placeholder
          className="absolute z-30 aspect-square"
          key="5"
          style={{ width: stackWidth, top: stackGap }}
        />,
      );
    }
    if (currentStack < 3) {
      renderArray.push(
        <Placeholder
          className="absolute z-20 aspect-square"
          key="6"
          style={{ width: stackWidth, top: stackGap * 2 }}
        />,
      );
    }
    if (currentStack < 2) {
      renderArray.push(
        <Placeholder
          className="absolute z-10 aspect-square"
          key="7"
          style={{ width: stackWidth, top: stackGap * 3 }}
        />,
      );
    }
    if (currentStack < 1) {
      renderArray.push(
        <Placeholder
          className="absolute aspect-square"
          key="8"
          style={{ width: stackWidth, top: stackGap * 4 }}
        />,
      );
    }

    return renderArray;
  }
  return animationSteps ? (
    <div
      ref={logoElement}
      className="relative"
      style={{
        top: animationSteps[currentStack].top,
        left: animationSteps[currentStack].left,
      }}
    >
      <GenerateLogo />
    </div>
  ) : null;
}
