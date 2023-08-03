import { FC, ReactNode } from "react";

const StatusUpload: FC<{ text: string }> = ({ text }) => {
    return (
        <div className="loader">
            <span className="loader__text">{text}&nbsp;</span>
        </div>
    );
};

export default StatusUpload;
