import CSharp from "@/assets/images/c_sharp.svg";
import Net from "@/assets/images/dotnet.svg";
import Typescript from "@/assets/images/typescript.svg";
import ReactLogo from "@/assets/images/react.svg";
import Expo from "@/assets/images/expo.svg";
import Python from "@/assets/images/python.svg";
import Blazor from "@/assets/images/blazor.svg";
import Unity from "@/assets/images/unity.svg";
import NextJS from "@/assets/images/nextjs.svg";
import FastApi from "@/assets/images/fast_api.svg";
import { useSceneDataStore } from "@/hooks/useSceneDataStore";
import { useShallow } from "zustand/shallow";

export default function TechStackDisplay() {
  const { stackWithHaloWidth } = useSceneDataStore(
    useShallow((s) => ({
      stackWithHaloWidth: s.sceneData?.stackWithHaloWidth ?? 0,
    })),
  );
  const height = 0.4 * stackWithHaloWidth;
  const margin = 0.05 * stackWithHaloWidth;
  const gap = 0.05 * stackWithHaloWidth;
  const width = 0.01 * stackWithHaloWidth;

  return (
    <div className="-z-2 flex w-9/12 items-center pt-4 max-sm:pt-2" style={{ gap: gap }}>
      <div className="w-1/3">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 max-sm:gap-1">
          <CSharp className="size-full" />
          <Net />
          <Unity className="text-theme-text-heading" />
          <Blazor />
        </div>
      </div>
      <div
        className="bg-theme-secondary rounded-sm opacity-30"
        style={{
          height: height,
          marginRight: margin,
          marginLeft: margin,
          width: width,
        }}
      />
      <div className="w-1/3">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 max-sm:gap-1">
          <Typescript />
          <ReactLogo />
          <NextJS className="text-theme-text-heading" />
          <Expo className="text-theme-text-heading" />
        </div>
      </div>
      <div
        className="bg-theme-secondary rounded-sm opacity-30"
        style={{
          height: height,
          marginRight: margin,
          marginLeft: margin,
          width: width,
        }}
      />
      <div className="w-1/3">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 max-sm:gap-1">
          <Python />
          <FastApi className="row-start-2" />
        </div>
      </div>
    </div>
  );
}
