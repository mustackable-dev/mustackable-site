import { RefObject, useEffect, useState } from "react";

export function useShown(ref: RefObject<Element | null>) {
    const [shown, setShown] = useState(false);
    useEffect(() => {
        if (ref.current) {
            const observe = new IntersectionObserver(([x]) => {
                if (x.isIntersecting) setShown(true);
            });
            observe.observe(ref.current);
            return () => {
                observe.disconnect();
            };
        }
    }, [ref]);
    return { shown };
}