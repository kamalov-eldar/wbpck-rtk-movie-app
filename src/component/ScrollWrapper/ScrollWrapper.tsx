import { memo, MutableRefObject, ReactNode, useRef } from "react";
import cls from "./ScrollWrapper.module.scss";
import classNames from "classnames";
import { useInfiniteScroll } from "hooks/useInfiniteScroll/useInfiniteScroll";

interface ScrollWrapperProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const ScrollWrapper = memo((props: ScrollWrapperProps) => {
    const { className, children, onScrollEnd } = props;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        callback: onScrollEnd, //;onScrollEnd,
        triggerRef,
        wrapperRef,
    });

    return (
        <section ref={wrapperRef} className={classNames(cls.ScrollWrapper, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
