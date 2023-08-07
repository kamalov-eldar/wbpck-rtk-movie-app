import React, { FC, useEffect } from "react";
import "./CastList.scss";
import { TCategoryType } from "../../api/types";
import apiConfig from "../../api/apiConfig";

type CastListProps = {
    id: number;
    category: TCategoryType;
};

const CastList: FC<CastListProps> = ({ id, category }) => {
    useEffect(() => {
        /*  getCasts(category, id);
        return () => {
            resetCasts();
        }; */
    }, [category, id]);

    return (
        <div className="casts">
            {[].map((item, i) => (
                <div key={i} className="casts__item">
                    <div
                        className="casts__item__img"
                        style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}></div>
                    <p className="casts__item__name">{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CastList;
