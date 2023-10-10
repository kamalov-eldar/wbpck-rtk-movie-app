import { useEffect, useState } from "react";
import Header from "./component/header/Header";
import Footer from "component/footer/Footer";
import { useTheme } from "providers/themeProvider/useTheme";
import AppRouter from "providers/router/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../src/store/user/slice/userSlice";
import { selectUserInited } from "store/user/selector/selectUserInited/selectUserInited";
import "./App.scss";
import "../node_modules/swiper/swiper.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const userInited = useSelector(selectUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
       /*  <ScrollWrapper> */
            <div className={`app ${theme}`}>
                {userInited && (
                    <>
                        <Header />
                        <AppRouter />
                        <Footer />
                    </>
                )}
            </div>
        /* </ScrollWrapper> */
    );
}

export default App;
