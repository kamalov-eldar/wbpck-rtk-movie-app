import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "component/footer/Footer";
import "./App.scss";
import "../node_modules/swiper/swiper.scss";
import NotFoundPage from "pages/NotFoundPage/NotFoundPage";
import { HomePageAsync } from "pages/Home/Home.async";
import { CatalogPageAsync } from "pages/Catalog/Catalog.async";
import { DetailPageAsync } from "pages/detail/Detail.async";
import StatusUpload from "component/status-upload/StatusUpload";
import Home from "pages/Home/Home";
import Catalog from "pages/Catalog/Catalog";
import Detail from "pages/detail/Detail";
import { useTheme } from "providers/themeProvider/useTheme";
import AppRouter from "providers/router/AppRouter";
import { useDispatch } from "react-redux";
import { userActions } from "store/user/slice/userSlice";

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, []);

    return (
        <div className={`app ${theme}`}>
            <Header />
            <AppRouter />
            <Footer />
        </div>
    );
}

export default App;
