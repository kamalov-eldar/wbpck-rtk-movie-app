import classNames from "classnames";
import cls from "./ProfileCard.module.scss";
import { Input } from "component/Input/Input";
import { Profile } from "store/profile/types/profile";
import { FC } from "react";
import { Loader } from "component/Loader/Loader";
import { Country, Currency } from "global/types/global";
import { Avatar } from "component/Avatar/Avatar";
import { CurrencySelect } from "component/CurrencySelect/CurrencySelect";
import { CountrySelect } from "component/CountrySelect/CountrySelect";
import { ProfilePageHeader } from "pages/ProfilePage/ProfilePageHeader/ProfilePageHeader";

interface ProfileCardProps {
    profile?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeFirstname: (value: string) => void;
    onChangeLastname: (value: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = ({
    profile,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
}) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [])}>
                <div className="errorBlock">{error && <p className="errorText">{error}</p>}</div>
            </div>
        );
    }

    return profile ? (
        <div className={classNames(cls.ProfileCard, {}, [])}>
            <ProfilePageHeader />
            <div className={classNames(cls.ProfileCard__container, {}, [])}>
                <div className={cls.ProfileCard__header}>
                    {profile?.avatar && (
                        <div className={cls.avatarWrapper}>
                            <Avatar src={profile?.avatar} />
                        </div>
                    )}
                </div>
                <div className={cls.ProfileCard__body}>
                    <div className={cls.body__wrapper}>
                        <Input
                            value={profile?.firstname}
                            readonly={readonly}
                            onChange={onChangeFirstname}
                            autofocus
                            type="text"
                            /*   className={cls.input} */
                            placeholder={"Ваше имя"}
                            label={"Ваше имя"}
                            field={"name"}
                        />
                        <Input
                            value={profile?.lastname}
                            readonly={readonly}
                            onChange={onChangeLastname}
                            type="text"
                            /*   className={cls.input} */
                            placeholder={"Ваша фамилия"}
                            label={"Ваша фамилия"}
                            field={"surname"}
                        />
                        <Input
                            value={profile?.age}
                            placeholder={"Ваш возраст"}
                            label={"Ваш возраст"}
                            className={cls.input}
                            onChange={onChangeAge}
                            readonly={readonly}
                            field={"age"}
                        />
                        <Input
                            value={profile?.city}
                            placeholder={"Город"}
                            label={"Город"}
                            className={cls.input}
                            onChange={onChangeCity}
                            readonly={readonly}
                            field={"city"}
                        />
                        <Input
                            value={profile?.username}
                            placeholder={"Введите имя пользователя"}
                            label={"Введите имя пользователя"}
                            className={cls.input}
                            onChange={onChangeUsername}
                            readonly={readonly}
                            field={"userName"}
                        />
                        <Input
                            value={profile?.avatar}
                            placeholder={"Введите ссылку на аватар"}
                            label={"Введите ссылку на аватар"}
                            className={cls.input}
                            onChange={onChangeAvatar}
                            readonly={readonly}
                            field={"srcAvatar"}
                        />
                        <CurrencySelect
                            className={cls.input}
                            value={profile?.currency}
                            onChange={onChangeCurrency}
                            readonly={readonly}
                        />
                        <CountrySelect className={cls.input} value={profile?.country} onChange={onChangeCountry} readonly={readonly} />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <>no data profile</>
    );
};
