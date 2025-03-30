import { useShallow } from "zustand/shallow";
import { useSceneDataStore } from "../stores/SceneDataStore";

export function useAnimatedLogo() {
    const { currentStack, logoElementRef, setCurrentStack, currentAnimationStep, setCurrentAnimationStep } =
        useSceneDataStore(
            useShallow((s) => (
                {
                    currentStack: s.currentStack,
                    logoElementRef: s.logoElementRef,
                    setCurrentStack: s.setCurrentStack,
                    currentAnimationStep: s.currentAnimationStep,
                    setCurrentAnimationStep: s.setCurrentAnimationStep
                })))


    function triggerAnimationStep(stack: number) {
        setCurrentStack(stack);
    }

    return { triggerAnimationStep };
}