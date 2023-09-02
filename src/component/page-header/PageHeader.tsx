import { FC } from "react";

import "./PageHeader.scss";

import bg from "../../assets/footer-bg.jpg";

const PageHeader: FC = () => {
    return <div className="page-header" style={{ backgroundImage: `url(${bg})` }}></div>;
};

export default PageHeader;
