import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import "./ProfilePage.scss";
import { profileReducer } from "store/profile/slice/profileSlice";
import { useEffect } from "react";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { fetchProfileData } from "store/profile/slice/fetchProfileData";
import { useSelector } from "react-redux";
import { selectProfile } from "store/profile/selectors/selectProfile";
import { Profile } from "store/profile/types/profile";
import { ProfileCard } from "component/ProfileCard/ProfileCard";

const redusers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const profile = useSelector(selectProfile);
    console.log("profile: ", profile);

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className="profile">
                <h1>ProfilePage</h1>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
