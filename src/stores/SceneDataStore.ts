import { RefObject } from "react"
import { SceneData } from "../types/SceneData"
import { create } from "../utilities/GlobalStoreReset"

interface SceneDataStore {
    currentStack: number
    setCurrentStack: (stack: number) => void

    currentAnimationStep: number
    setCurrentAnimationStep: (index: number) => void

    sceneData?: SceneData
    setSceneData: (data: SceneData) => void

    logoElementRef: RefObject<HTMLDivElement | null>
}

export const useSceneDataStore = create('animationData')<SceneDataStore>()((set) => (
    {
        currentStack: 0,
        setCurrentStack: (stack: number) => { set({ currentStack: stack }) },

        currentAnimationStep: 0,
        setCurrentAnimationStep: (index: number) => { set({ currentAnimationStep: index }) },

        setSceneData: (data) => { set({ sceneData: data }) },

        logoElementRef: { current: null }
    }))