import React, { memo } from "react";
import cls from "./Icon.module.scss";
import classNames from "classnames";

interface IconProps {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg } = props;

    return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
