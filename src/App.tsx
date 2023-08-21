import { Suspense, memo, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "component/footer/Footer";
import "./App.scss";
import "../node_modules/swiper/swiper.scss";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import { HomePageAsync } from "pages/Home/Home.async";
import { CatalogPageAsync } from "pages/Catalog/Catalog.async";
import { DetailPageAsync } from "pages/Detail/Detail.async";
import StatusUpload from "component/status-upload/StatusUpload";
import Catalog from "pages/Catalog/Catalog";
import Detail from "pages/Detail/Detail";
import { useTheme } from "providers/themeProvider/useTheme";
import AppRouter from "providers/router/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../src/store/user/slice/userSlice";
import { selectUserInited } from "store/user/selector/selectUserInited/selectUserInited";

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const userInited = useSelector(selectUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={`app ${theme}`}>
            <Header />
            {userInited && <AppRouter />}
            <Footer />
        </div>
    );
}

export default App;
