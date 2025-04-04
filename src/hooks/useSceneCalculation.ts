import { useShallow } from "zustand/shallow";
import { useSceneDataStore } from "@/hooks/useSceneDataStore";
import { useEffect } from "react";
import { createFilledArray, createFilledArrayWithFunction, getRandomInteger } from "@/utilities/Common";

const easingFunctions = ["ease", "ease-in", "ease-out", "ease-in-out", "linear", ...createFilledArray<string>(10, "bezier")];

const stacksRightAlignments: boolean[] = [true, false, true, false, true];

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
            const baseDelay = 2500;
            const animationTimings = [1000, 1400, 1800, 2200, 2600];
            generateAnimationData(stackWithHaloWidth, stackWidth, stackGap, baseDelay, animationTimings);
            setSceneData({ stackWithHaloWidth, stackWidth, stackGap, baseDelay, animationTimings });
        }

        function generateAnimationData(stackWithHaloWidth: number, stackWidth: number, stackGap: number, baseDelay: number, animationTimings: number[]) {

            const animations: string[] = [];

            for (let i = 0; i < stacksRightAlignments.length; i++) {
                const stackPosition = `
                    .stack-${i.toString()}-animation {
                        animation: 
                            stack-${i.toString()}-x ${animationTimings[i].toString()}ms ${generateRandomTimingFunction()} ${baseDelay.toString()}ms forwards,
                            stack-${i.toString()}-y ${animationTimings[i].toString()}ms linear ${baseDelay.toString()}ms forwards;
                    }

                    @keyframes stack-${i.toString()}-x {
                        from {
                            left: 0px
                        }
                        to {
                            left: ${((stackWithHaloWidth + stackWithHaloWidth * 0.15) * (!stacksRightAlignments[i] ? 1 : -1)).toString()}px
                        }
                    }

                    @keyframes stack-${i.toString()}-y {
                        from {
                            top: ${(stackGap * i).toString()}px;
                        }
                        to {
                            top: ${((stackWithHaloWidth - stackWidth) / 2 + i * (stackWithHaloWidth + stackWithHaloWidth * 0.2)).toString()}px;
                        }
                    }`;
                animations.push(stackPosition);
            };

            animations.push(generateWandAnimation(baseDelay, stackWidth));
            animations.push(generateFadeInPanelClasses(stackWithHaloWidth));

            const animationSheet = document.getElementById("stackAnimations");
            if (animationSheet)
                animationSheet.innerHTML = animations.join("\r\n");
        }

        function generateWandAnimation(baseDelay: number, stackWidth: number) {
            const fadeInTime = 750;
            const animationDuration = baseDelay - fadeInTime;
            return `
                    .wand-animation {
                        animation: 
                              pop-in ${(animationDuration * 0.25).toString()}ms cubic-bezier(0.25, 0.5, 0.75, 1.5) ${fadeInTime.toString()}ms backwards,
                              tap ${(animationDuration * 0.5).toString()}ms ease ${(fadeInTime + animationDuration * 0.25).toString()}ms forwards,
                              pop-out ${(animationDuration * 0.25).toString()}ms cubic-bezier(0.25, 0.5, 0.75, 1.5) ${(fadeInTime + animationDuration * 0.75).toString()}ms forwards;
                        left: ${(stackWidth * 1.1).toString()}px;
                        top: ${(stackWidth * 0.6).toString()}px;
                        position: absolute;
                        width: ${(stackWidth * 0.5).toString()}px;
                        height: ${(stackWidth * 0.5).toString()}px;
                        z-index: 70;
                    }

                    .wand-tap {
                        
                        animation:
                            blink 100ms step-end ${(fadeInTime + animationDuration * 0.43).toString()}ms forwards;
                        position: absolute;
                        top: -25%;
                        opacity: 0%;
                    }
                    
                    .stack-placeholder-fade {
                        animation: blink 200ms ease ${(fadeInTime + animationDuration * 0.43 + 220).toString()}ms forwards;}

                    @keyframes tap {
                        0% {
                        }

                        50% {
                            transform: rotate(-45deg);
                            left: ${(stackWidth * 0.8).toString()}px;
                        }

                        100% {
                        }
                    }

                    @keyframes blink {
                        from {
                            opacity:100%;
                        }

                        to {
                            opacity:0%;
                        }
                    }`;
        }

        function generateFadeInPanelClasses(stackWithHaloWidth: number) {
            return `
                .fade-in-panel-left {
                    height: ${stackWithHaloWidth.toString()}px;
                    width: ${(stackWithHaloWidth * 2.15).toString()}px;
                    background-image: linear-gradient(
                        to left,
                        rgba(0, 0, 0, 0),
                        rgba(0, 0, 0, 0),
                        var(--background-color),
                        var(--background-color)
                    );
                    position: absolute;
                    background-size: 300% 100%;
                    background-position-x: 0%;
                    pointer-events: none;
                    animation: gradient-shift-left 3s ease forwards;
                    z-index: -1;
                }

                .fade-in-panel-right {
                    height: ${stackWithHaloWidth.toString()}px;
                    width: ${(stackWithHaloWidth * 2.15).toString()}px;
                    background-image: linear-gradient(
                        to right,
                        rgba(0, 0, 0, 0),
                        rgba(0, 0, 0, 0),
                        var(--background-color),
                        var(--background-color)
                    );
                    position: absolute;
                    background-size: 300% 100%;
                    background-position-x: 100%;
                    pointer-events: none;
                    animation: gradient-shift-right 3s ease forwards;
                    z-index: -1;
                }`;
        }

        function generateRandomTimingFunction(): string {
            let randomEasing = easingFunctions[getRandomInteger(0, easingFunctions.length - 1)];
            if (randomEasing === "bezier") {
                const timings = createFilledArrayWithFunction<number>(4, () => { return getRandomInteger(-30, 100) / 100 })
                randomEasing = `cubic-bezier(${Math.abs(timings[0]).toString()},${timings[1].toString()},${Math.abs(timings[2]).toString()},${timings[3].toString()})`;
            }
            return randomEasing;
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

    return { stacksRightAlignments };
}