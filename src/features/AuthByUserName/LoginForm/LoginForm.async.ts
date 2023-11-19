import { FC, lazy } from "react";
import { LoginModalContentProps } from "./LoginModalContent";

export const LoginFormAsync = lazy<FC<LoginModalContentProps>>(() => import("./LoginModalContent"));