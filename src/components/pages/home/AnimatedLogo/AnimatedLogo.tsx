import { JSX } from "react";
import Level0 from "../../../../assets/images/stack_level_0.svg?react";
import Level1 from "../../../../assets/images/stack_level_1.svg?react";
import Level2 from "../../../../assets/images/stack_level_2.svg?react";
import Level3 from "../../../../assets/images/stack_level_3.svg?react";
import Level4 from "../../../../assets/images/stack_level_4.svg?react";
import Placeholder from "../../../../assets/images/stack_placeholder.svg?react";

interface StackLogoProps {
  currentLevel: number;
}

export default function AnimatedLogo({ currentLevel }: StackLogoProps) {
  function GenerateLogo() {
    const renderArray: JSX.Element[] = [];
    switch (currentLevel) {
      case 0:
        renderArray.push(<Level0 className="absolute z-40 size-52" key="0" />);
        break;
      case 1:
        renderArray.push(<Level1 className="absolute z-40 size-52" key="1" />);
        break;
      case 2:
        renderArray.push(<Level2 className="absolute z-40 size-52" key="2" />);
        break;
      case 3:
        renderArray.push(<Level3 className="absolute z-40 size-52" key="3" />);
        break;
      case 4:
        renderArray.push(<Level4 className="absolute z-40 size-52" key="4" />);
        break;
    }
    if (currentLevel < 4) {
      renderArray.push(
        <Placeholder className="absolute top-8 z-30 size-52" key="5" />,
      );
    }
    if (currentLevel < 3) {
      renderArray.push(
        <Placeholder className="absolute top-16 z-20 size-52" key="6" />,
      );
    }
    if (currentLevel < 2) {
      renderArray.push(
        <Placeholder className="absolute top-24 z-10 size-52" key="7" />,
      );
    }
    if (currentLevel < 1) {
      renderArray.push(
        <Placeholder className="absolute top-32 size-52" key="8" />,
      );
    }

    return renderArray;
  }
  return (
    <div className="relative">
      <GenerateLogo />
    </div>
  );
}
