import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        //  let observer: IntersectionObserver | null = null;
        const scrollElement = document.querySelector("html"); // wrapperRef.current; //
        const triggerElement = document.querySelector("#scroll"); // triggerRef.current; //
        console.log('triggerElement: ', triggerElement);

        if (callback && triggerElement) {
            const options = {
                root: scrollElement, // элемент со скролом root: document.querySelector("#scrollArea"),
                rootMargin: "0px",
                threshold: 1.0,
            };
            observer.current = new IntersectionObserver((entries) => {
                console.log('entries: ', entries);
                if (entries[0].isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElement);
        }

        return () => {
            if (observer.current && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
