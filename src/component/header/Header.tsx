import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
//import "./Header.scss";
import cls from "./Header.module.scss";

import { ThemeSwitcher } from "component/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "providers/themeProvider/useTheme";
import { RoutePath } from "../../../config/routeConfig/routeConfig";
import { LoginModal } from "features/AuthByUserName/LoginModal/LoginModal";
import Button, { ButtonTheme } from "component/button/Button";

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

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div ref={headerRef} className={`${cls.header} ${theme}`}>
            <div className={cls["header__wrap"]}>
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to={RoutePath.home}>Movies</Link>
                    <p className={cls.beta}>beta</p>
                </div>

                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                <ThemeSwitcher />
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
                    "Войти"
                </Button>

                <ul className={cls.header__nav}>
                    {headerNav.map((e, i) => (
                        <li key={i} className={`${i === index ? cls.active : ""}`}>
                            <Link to={e.path}>{e.display}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
