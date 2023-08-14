import { Link } from "react-router-dom";
import { RoutePath } from "../../../config/routeConfig/routeConfig";
import cls from "./NavbarLinks.module.scss";
import { useLocation } from "react-router-dom";
import { memo } from "react";

const headerNav = [
    {
        display: "Home",
        path: RoutePath.home,
    },
    {
        display: "Upcoming Movies",
        path: "/catalog/movie/upcoming",
    },
    {
        display: "TV Series",
        path: "/catalog/tv/popular",
    },
    {
        display: "Profile",
        path: RoutePath.profile,
    },
];

export const NavbarLinks = memo(() => {
    const { pathname } = useLocation();
    const index = headerNav.findIndex((e) => e.path === pathname);

    return (
        <ul className={cls.header__nav}>
            {headerNav.map((e, i) => (
                <li key={i} className={`${i === index ? cls.active : ""}`}>
                    <Link to={e.path}>{e.display}</Link>
                </li>
            ))}
        </ul>
    );
});
