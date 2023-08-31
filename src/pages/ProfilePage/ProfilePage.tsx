import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import { profileActions, profileReducer } from "store/profile/slice/profileSlice";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Profile, ValidateProfileError } from "store/profile/types/profile";
import { ProfileCard } from "component/ProfileCard/ProfileCard";
import { selectProfileIsLoading } from "store/profile/selectors/selectProfileIsLoading/selectProfileIsLoading";
import { selectProfileError } from "store/profile/selectors/selectProfileError/selectProfileError";
import { selectProfile } from "store/profile/selectors/selectProfile/selectProfile";
import { useTheme } from "providers/themeProvider/useTheme";
// import "./ProfilePage.scss";
import cls from "./ProfilePage.module.scss";
import classNames from "classnames";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { selectProfileReadonly } from "store/profile/selectors/selectProfileReadonly/selectProfileReadonly";
import { selectProfileForm } from "store/profile/selectors/selectProfileForm/selectProfileForm";
import { Country, Currency } from "global/types/global";
import { selectProfileValidateErrors } from "store/profile/selectors/selectProfileValidateErrors/selectProfileValidateErrors";
import { fetchProfileData } from "store/profile/services/fetchProfileData/fetchProfileData";
import { useParams } from "react-router-dom";

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
    const validateErrors = useSelector(selectProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: "Серверная ошибка при сохранении",
        [ValidateProfileError.INCORRECT_COUNTRY]: "Некорректный регион",
        [ValidateProfileError.NO_DATA]: "Данные не указаны",
        [ValidateProfileError.INCORRECT_USER_DATA]: "Имя и фамилия обязательны",
        [ValidateProfileError.INCORRECT_AGE]: "Некорректный возраст",
    };

    useEffect(() => {
        if (__PROJECT__ !== "storybook") {
            if (id) dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

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
                {validateErrors?.length &&
                    validateErrors.map((err) => (
                        <div className="errorText" key={err}>
                            {validateErrorTranslates[err]}
                        </div>
                    ))}
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
