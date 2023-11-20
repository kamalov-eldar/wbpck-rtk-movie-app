import React, { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/tmovie.png";
import cls from "./Header.module.scss";

import { ThemeSwitcher } from "component/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "providers/themeProvider/useTheme";
import { RoutePath } from "../../../config/routeConfig/routeConfig";
import { LoginModal } from "features/AuthByUserName/LoginModal/LoginModal";
import Button, { ButtonTheme } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { selectUserAuthData } from "store/user/selector/selectUserAuthData";
import { userActions } from "../../store/user/slice/userSlice";
import { NavbarLinks } from "component/navbar-link/NavbarLinks";

type HeaderProps = {
    catalog?: boolean;
};

const Header = memo(({ catalog }: HeaderProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useDispatch();

    const headerRef = useRef<HTMLDivElement | null>(null);

    const authUser = useSelector(selectUserAuthData);
    const [isAuthModal, setIsAuthModal] = useState(false);

    useEffect(() => {
        const shrinkHeader = () => {
            // console.log("scroll");
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
    }, [dispatch]);

    return (
        <div id="header" ref={headerRef} className={`${cls.header} ${theme} ${catalog && "header__catalog"}`}>
            <div className={cls["header__wrap"]}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <Link style={{ color: "#fff" }} to={RoutePath.home}>
                    <div className={cls.block}>
                        <h1>Movies</h1>
                        <span className={cls.beta}>beta</span>
                    </div>
                </Link>
                {/*  <div className="beta"></div> */}
                {authUser ? (
                    <Button theme={ButtonTheme.CLEAR} onClick={onLogout}>
                        Выйти
                    </Button>
                ) : (
                    <Button theme={ButtonTheme.CLEAR} onClick={onShowModal}>
                        Войти
                    </Button>
                )}
                <ThemeSwitcher />

                <NavbarLinks />
            </div>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
});

export default Header;
