import CSharp from "../../../../assets/images/c_sharp.svg";
import Net from "../../../../assets/images/dotnet.svg";
import Typescript from "../../../../assets/images/typescript.svg";
import ReactLogo from "../../../../assets/images/react.svg";
import Expo from "../../../../assets/images/expo.svg";
import Python from "../../../../assets/images/python.svg";
import Ollama from "../../../../assets/images/ollama.svg";
import Blazor from "../../../../assets/images/blazor.svg";
import FastApi from "../../../../assets/images/fast_api.svg";
import { useSceneDataStore } from "../../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";

export default function TechStackDisplay() {
  const { stackWithHaloWidth } = useSceneDataStore(
    useShallow((s) => ({
      stackWithHaloWidth: s.sceneData?.stackWithHaloWidth ?? 0,
    }))
  );
  const height = 0.15 * stackWithHaloWidth;
  const margin = 0.05 * stackWithHaloWidth;
  const gap = 0.05 * stackWithHaloWidth;
  return (
    <div
      className="-z-2 flex w-11/12 items-center pt-4 max-sm:pt-2"
      style={{ gap: gap }}
    >
      <CSharp />
      <Net />
      <Blazor />
      <div
        className="bg-theme-secondary w-1 rounded-sm opacity-30"
        style={{
          height: height,
          marginRight: margin,
          marginLeft: margin,
        }}
      />
      <Typescript />
      <ReactLogo />
      <Expo className="text-theme-text-heading" />
      <div
        className="bg-theme-secondary w-1 rounded-sm opacity-30"
        style={{
          height: height,
          marginRight: margin,
          marginLeft: margin,
        }}
      />
      <Python />
      <Ollama className="text-theme-text-heading" />
      <FastApi />
    </div>
  );
}
