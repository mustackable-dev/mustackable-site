import { useShallow } from "zustand/shallow";
import { useSceneDataStore } from "../stores/SceneDataStore";
import { useEffect } from "react";

const stacksCount = 5;

export function useSceneCalculation() {
    const { setSceneData, referenceStack } =
        useSceneDataStore(
            useShallow((s) => (
                {
                    setSceneData: s.setSceneData,
                    referenceStack: s.referenceStack
                })),
        );

    useEffect(() => {

        function generateSceneData(rect: DOMRectReadOnly) {
            const stackWithHaloWidth = rect.width;
            const stackWidth = rect.width * 0.75;
            const stackGap = rect.width * 0.11865;
            const baseDelay = 500;
            const animationTimings = [1000, 1800, 2600, 3400, 4200];
            generateStackAnimations(stackWithHaloWidth, stackWidth, stackGap, baseDelay, animationTimings);
            setSceneData({ stackWithHaloWidth, stackWidth, stackGap, baseDelay, animationTimings });
        }

        function generateStackAnimations(stackWithHaloWidth: number, stackWidth: number, stackGap: number, baseDelay: number, animationTimings: number[]) {

            const animations: string[] = [];

            for (let i = 0; i < stacksCount; i++) {
                const stackPosition = `
                    .stack-${i.toString()}-animation {
                        animation: stack-${i.toString()} ${(animationTimings[i] / 1000).toString()}s ease forwards;
                        animation-delay: ${baseDelay.toString()}ms;
                    }

                    @keyframes stack-${i.toString()} {
                        from {
                            top: ${(stackGap * i).toString()}px;
                            left: 0px
                        }
                        to {
                            top: ${((stackWithHaloWidth - stackWidth) / 2 + i * (stackWithHaloWidth + stackWithHaloWidth * 0.2)).toString()}px;
                            left: ${((stackWithHaloWidth + stackWithHaloWidth * 0.15) * (i % 2 === 1 ? 1 : -1)).toString()}px
                        }
                    }`;
                animations.push(stackPosition);
            };

            const animationSheet = document.getElementById("stackAnimations");
            if (animationSheet)
                animationSheet.innerHTML = animations.join("\r\n");
        }

        if (referenceStack.current) {
            const observe = new ResizeObserver(([x]) => {
                generateSceneData(x.contentRect);
            });
            observe.observe(referenceStack.current);
            return () => {
                observe.disconnect();
            };
        }
    }, [referenceStack, setSceneData]);

    return {};
}