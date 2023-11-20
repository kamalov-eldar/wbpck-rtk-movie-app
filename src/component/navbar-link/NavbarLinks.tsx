import { Link } from "react-router-dom";
import { RoutePath } from "../../../config/routeConfig/routeConfig";
import cls from "./NavbarLinks.module.scss";
import { useLocation } from "react-router-dom";
import { memo } from "react";
import { NavbarItem } from "./NavbarItem/NavbarItem";

export interface NavbarItemType {
    path: string;
    display: string;
    authOnly?: boolean;
}

const headerNav: NavbarItemType[] = [
    {
        display: "Home",
        path: '/',
    },
    {
        display: "Upcoming Movies",
        path: "/catalog/movie/upcoming",
    },
    {
        display: "Profile",
        path: "/profile/1",
        authOnly: true,
    },
];

export const NavbarLinks = memo(() => {
    const { pathname } = useLocation();
    const index = headerNav.findIndex((e) => e.path === pathname);

    return (
        <ul className={cls.header__nav}>
            {headerNav.map((link, i) => (
                <li key={i} className={`${i === index ? cls.active : ""}`}>
                    <NavbarItem item={link} />
                </li>
            ))}
        </ul>
    );
});
