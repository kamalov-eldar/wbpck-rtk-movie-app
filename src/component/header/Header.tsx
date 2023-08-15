import React, { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
//import "./Header.scss";
import cls from "./Header.module.scss";

import { ThemeSwitcher } from "component/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "providers/themeProvider/useTheme";
import { RoutePath } from "../../../config/routeConfig/routeConfig";
import { LoginModal } from "features/AuthByUserName/LoginModal/LoginModal";
import Button, { ButtonTheme } from "component/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectUserAuthData } from "store/user/selector/selectUserAuthData";
import { userActions } from "../../store/user/slice/userSlice";
import { NavbarLinks } from "component/navbar-link/NavbarLinks";

const Header = memo(() => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useDispatch();

    const headerRef = useRef<HTMLDivElement | null>(null);

    const authUser = useSelector(selectUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);

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

    useEffect(() => {
        if (authUser) {
            setIsAuthModal(false);
        }
    }, [authUser]);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, []);

    return (
        <div ref={headerRef} className={`${cls.header} ${theme}`}>
            <div className={cls["header__wrap"]}>
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to={RoutePath.home}>Movies</Link>
                    <p className={cls.beta}>beta</p>
                </div>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
                <ThemeSwitcher />
                {authUser ? (
                    <Button theme={ButtonTheme.CLEAR} onClick={onLogout}>
                        Выйти
                    </Button>
                ) : (
                    <Button theme={ButtonTheme.CLEAR} onClick={onShowModal}>
                        Войти
                    </Button>
                )}
                <NavbarLinks />
            </div>
        </div>
    );
});

export default Header;
