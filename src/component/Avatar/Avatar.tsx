import classNames from "classnames";

import { CSSProperties, useMemo } from "react";
import cls from "./Avatar.module.scss";
import { TMods } from "global/types/global";

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const mods: TMods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    return <img src={src} alt={alt} style={styles} className={classNames(cls.Avatar, mods, [className])} />;
};
