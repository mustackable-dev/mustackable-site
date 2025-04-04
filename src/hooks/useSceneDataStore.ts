import { RefObject } from "react";
import { SceneData } from "@/types/SceneData";
import { create } from "@/utilities/GlobalStoreReset";

interface SceneDataStore {

    sceneData?: SceneData
    setSceneData: (data: SceneData) => void

    referenceStack: RefObject<HTMLDivElement | null>
}

export const useSceneDataStore = create('animationData')<SceneDataStore>()((set) => (
    {
        setSceneData: (data) => { set({ sceneData: data }) },
        referenceStack: { current: null }
    }))