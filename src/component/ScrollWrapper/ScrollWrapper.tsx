import { memo, MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
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
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    });

    return (
        <section ref={wrapperRef} className={classNames(cls.ScrollWrapper, {}, [className])}>
            {children}
            <div /* style={{ border: "dashed 1px black" }}  */ ref={triggerRef}></div>
        </section>
    );
});
