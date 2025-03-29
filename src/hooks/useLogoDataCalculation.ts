import { useShallow } from "zustand/shallow";
import { useAnimationDataStore } from "../stores/AnimationDataStore";
import { RefObject, useEffect } from "react";
import { calculateLogoData } from "../services/AnimationService";

export function useLogoDataCalculation(ref: RefObject<HTMLDivElement | null>) {
    const { setLogoData } = useAnimationDataStore(
        useShallow((s) => ({ setLogoData: s.setLogoData })),
    );

    useEffect(() => {
        if (ref.current) {
            const observe = new ResizeObserver(([x]) => {
                setLogoData(calculateLogoData(x.contentRect));
            });
            observe.observe(ref.current);
            return () => {
                observe.disconnect();
            };
        }
    }, [ref, setLogoData]);
    return {};
}