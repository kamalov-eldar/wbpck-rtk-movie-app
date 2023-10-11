import cls from "./Footer.module.scss";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../config/routeConfig/routeConfig";

type FooterProps = {
    catalog?: boolean;
};

const Footer = ({ catalog }: FooterProps) => {
    return (
        <div
            data-testid="Footer"
            className={`${cls.footer} ${catalog && "footer__catalog"}`}
            style={{ backgroundImage: `url(${bg})` }}>
            <div className={cls.footer__content}>
                <div className={`cls.footer__content__logo ${"logo"}`}>
                    <img src={logo} alt="logo" />
                    <Link to={RoutePath.home} />
                </div>
                <div className={cls.footer__content__menu}>
                    <Link to={RoutePath.home}>Home</Link>
                    <Link to={RoutePath.home}>Contact us</Link>
                    <Link to={RoutePath.home}>Term of services</Link>
                    <Link to={RoutePath.home}>About us</Link>
                </div>

                {/* <div className="footer__content__menu">
                        <Link to={RoutePath.home}>Live</Link>
                        <Link to={RoutePath.home}>FAQ</Link>
                        <Link to={RoutePath.home}>Premium</Link>
                        <Link to={RoutePath.home}>Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to={RoutePath.home}>Yuo must watch</Link>
                        <Link to={RoutePath.home}>Recent release</Link>
                        <Link to={RoutePath.home}>Top IMDB</Link>
                    </div> */}
            </div>
        </div>
    );
};

export default Footer;
