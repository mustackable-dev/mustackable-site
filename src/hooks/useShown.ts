import { RefObject, useEffect, useState } from "react";

export function useShown(ref: RefObject<Element | null>, callback?: () => void) {
    const [shown, setShown] = useState(false);
    useEffect(() => {
        if (ref.current) {
            const observe = new IntersectionObserver(([x]) => {
                if (x.isIntersecting && !shown) {
                    setShown(true);
                    if (callback) callback();
                }
            });
            observe.observe(ref.current);
            return () => {
                observe.disconnect();
            };
        }
    }, [ref, callback, shown]);
    return { shown };
}