import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import { profileActions, profileReducer } from "store/profile/slice/profileSlice";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { fetchProfileData } from "store/profile/slice/fetchProfileData";
import { useSelector } from "react-redux";
import { Profile } from "store/profile/types/profile";
import { ProfileCard } from "component/ProfileCard/ProfileCard";
import { selectProfileIsLoading } from "store/profile/selectors/selectProfileIsLoading";
import { selectProfileError } from "store/profile/selectors/selectProfileError";
import { selectProfile } from "store/profile/selectors/selectProfile";
import { useTheme } from "providers/themeProvider/useTheme";
// import "./ProfilePage.scss";
import cls from "./ProfilePage.module.scss";
import classNames from "classnames";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { selectProfileReadonly } from "store/profile/selectors/selectProfileReadonly";
import { selectProfileForm } from "store/profile/selectors/selectProfileForm";
import { Country, Currency } from "global/types/global";

const redusers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { theme } = useTheme();

    const dispatch = useAppDispatch();
    const profileData = useSelector(selectProfile);
    const profileForm = useSelector(selectProfileForm);
    const isLoading = useSelector(selectProfileIsLoading);
    const error = useSelector(selectProfileError);
    const readonly = useSelector(selectProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ firstname: value || "" }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || "" }));
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || "" }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || "" }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || "" }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div className={classNames(cls.profilePage, {}, [theme])}>
                <ProfilePageHeader />
                <ProfileCard
                    readonly={readonly}
                    profile={profileForm}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
