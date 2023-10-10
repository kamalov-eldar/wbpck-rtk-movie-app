import "./Footer.scss";

import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/tmovie.png";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../config/routeConfig/routeConfig";

const Footer = () => {
    return (
        <div data-testid="Footer" className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to={RoutePath.home} />
                </div>
                <div className="footer__content__menu">
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
