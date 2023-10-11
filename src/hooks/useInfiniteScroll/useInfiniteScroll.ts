import { MutableRefObject, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectPage } from "store/pagination/selectors/selectPage/selectPage";

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, triggerRef, wrapperRef }: UseInfiniteScrollOptions) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
       // const scrollElement = wrapperRef.current; // document.querySelector("html");
        const triggerElement = triggerRef.current; // triggerRef.current;

        if (callback && triggerElement) {
           /*  const options = {
                root: null, // scrollElement, // элемент со скролом root: document.querySelector("#scrollArea"),
                rootMargin: "20px",
                threshold: 1.0,
            }; */
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, {});
            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
