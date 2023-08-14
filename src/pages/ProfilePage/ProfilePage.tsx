import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import "./ProfilePage.scss";
import { profileReducer } from "store/profile/slice/profileSlice";

const redusers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className="profile">
                <h1>ProfilePage</h1>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
