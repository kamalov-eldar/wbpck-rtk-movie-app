import classNames from "classnames";
import { CSSProperties, memo } from "react";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
    paddingTop?: string;
    borderBottomRightRadius?: string;
    borderBottomLeftRadius?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border, paddingTop, borderBottomRightRadius, borderBottomLeftRadius } = props;
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
        paddingTop,
        borderBottomRightRadius,
        borderBottomLeftRadius,
    };

    return <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />;
});
