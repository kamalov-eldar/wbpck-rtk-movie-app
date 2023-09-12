declare module "*.scss" {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
/* declare module "*.svg" {
    const value: string;
    export default value;
} */
declare module "*.svg" {
    import React from "react";

    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare const __API__: string;
declare const __IS_DEV__: boolean;
declare const __PROJECT__: "storybook" | "frontend" | "jest";

type CustomDeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: CustomDeepPartial<T[P]>;
      }
    : T;
