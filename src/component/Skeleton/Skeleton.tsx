import classNames from "classnames";
import { CSSProperties, memo } from "react";
import cls from "./Skeleton.module.scss";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
    borderBottomRightRadius?: string;
    borderBottomLeftRadius?: string;
    paddingTop?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border, paddingTop, borderBottomRightRadius, borderBottomLeftRadius } = props;
    //  border-bottom-left-radius: 0px;
    // border-bottom-right-radius: 0px;
    /* borderBottomLeftRadius: '30px',
          borderBottomRightRadius: '30px', */
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
        borderBottomRightRadius,
        borderBottomLeftRadius,
        paddingTop,
    };

    return <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />;
});
