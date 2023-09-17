import React, { FC, useEffect } from "react";
import { TCategoryType } from "../../api/types";
import apiConfig from "../../api/apiConfig";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { fetchActorsList } from "store/actors/fetchActorsList/fetchActorsList";
import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import { actorsReducer } from "store/actors/slice/actorsSlice";
import { useSelector } from "react-redux";
import { selectActorsList, selectActorsListError, selectActorsListIsLoading } from "store/actors/selectors/selectActorsList";

import "./ActorsList.scss";
import { IMG } from "component/IMG/IMG";

type ActorsListProps = {
    id?: number;
    category: TCategoryType;
};

const initialReducers: ReducersList = {
    actors: actorsReducer,
};

const ActorsList: FC<ActorsListProps> = ({ id, category }) => {
    const dispatch = useAppDispatch();

    const actorsList = useSelector(selectActorsList);
    const isLoading = useSelector(selectActorsListIsLoading);
    const error = useSelector(selectActorsListError);

    useEffect(() => {
        if (id) dispatch(fetchActorsList(id));
    }, [id, dispatch]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className="actors">
                {actorsList &&
                    actorsList.slice(0, 9).map((item, i) => (
                        <div key={i} className="actors__item">
                            <IMG borderRadius={`0`} onlyImg path={item.profile_path} size={"w185"} />
                            <p className="actors__item__name">{item.name}</p>
                        </div>
                    ))}
            </div>
        </DynamicModuleLoader>
    );
};

export default ActorsList;
