import { LogoData } from "../types/LogoData";
import { StepCoordinates } from "../types/StepCoordinates";

const stacksCount = 5;

export function calculateLogoData(rect: DOMRectReadOnly): LogoData {
    const stackWithHaloWidth = rect.width;
    const stackWidth = rect.width * 0.75;
    const stackGap = rect.width * 0.11865;
    const animationSteps: StepCoordinates[] = []
    for (let i = 0; i < stacksCount; i++) {
        const stackPosition: StepCoordinates = {
            top: 64 + (stackWithHaloWidth - stackWidth) / 2 + i * (stackWithHaloWidth + 64),
            left: (stackWithHaloWidth + 32) * (i % 2 === 1 ? 1 : -1) - stackWidth / 2
        }
        const detachPosition: StepCoordinates = { ...stackPosition, top: stackPosition.top + stackGap };
        animationSteps.push(stackPosition);
    }
    return {
        stackWithHaloWidth, stackWidth, stackGap, animationSteps
    }
}