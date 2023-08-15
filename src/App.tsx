import { Suspense, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { userActions } from "../src/store/user/slice/userSlice";

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={`app ${theme}`}>
            <Header />
            <AppRouter />
            <Footer />
        </div>
    );
}

export default App;
