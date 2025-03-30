import { useShallow } from "zustand/shallow";
import { useSceneDataStore } from "../stores/SceneDataStore";
import { RefObject, useEffect } from "react";
import { StepCoordinates } from "../types/StepCoordinates";

const stacksCount = 5;

export function useSceneCalculation(ref: RefObject<HTMLDivElement | null>) {
    const { setSceneData } = useSceneDataStore(
        useShallow((s) => ({ setSceneData: s.setSceneData })),
    );

    useEffect(() => {
        function recordSceneData(rect: DOMRectReadOnly) {
            const stackWithHaloWidth = rect.width;
            const stackWidth = rect.width * 0.75;
            const stackGap = rect.width * 0.11865;
            const animationSteps: StepCoordinates[] = [];

            for (let i = 0; i < stacksCount; i++) {
                const stackPosition: StepCoordinates = {
                    top: (stackWithHaloWidth - stackWidth) / 2 + i * (stackWithHaloWidth + stackWithHaloWidth * 0.2),
                    left: (stackWithHaloWidth + stackWithHaloWidth * 0.15) * (i % 2 === 1 ? 1 : -1) - stackWidth / 2
                }
                // const detachPosition: StepCoordinates = { ...stackPosition, top: stackPosition.top + stackGap };
                animationSteps.push(stackPosition);
            };

            setSceneData({ stackWithHaloWidth, stackWidth, stackGap, animationSteps });
        }

        if (ref.current) {
            const observe = new ResizeObserver(([x]) => {
                recordSceneData(x.contentRect);
            });
            observe.observe(ref.current);
            return () => {
                observe.disconnect();
            };
        }
    }, [ref, setSceneData]);

    return {};
}