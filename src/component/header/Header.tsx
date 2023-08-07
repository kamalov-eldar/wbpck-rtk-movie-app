import React, { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import "./Header.scss";
import { ThemeSwitcher } from "component/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "providers/themeProvider/useTheme";
import { RoutePath } from "../../../config/routeConfig/routeConfig";

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
];

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    const { pathname } = useLocation();
    const headerRef = useRef<HTMLDivElement | null>(null);
    const index = headerNav.findIndex((e) => e.path === pathname);
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current?.classList.add("shrink");
            } else {
                headerRef.current?.classList.remove("shrink");
            }
        };

        window.addEventListener("scroll", shrinkHeader);

        return () => {
            window.removeEventListener("scroll", shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className={`header ${theme}`}>
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to={RoutePath.home}>Movies</Link>
                    <p className="beta">beta</p>
                </div>

                <ThemeSwitcher />
                <ul className="header__nav">
                    {headerNav.map((e, i) => (
                        <li key={i} className={`${i === index ? "active" : ""}`}>
                            <Link to={e.path}>{e.display}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
