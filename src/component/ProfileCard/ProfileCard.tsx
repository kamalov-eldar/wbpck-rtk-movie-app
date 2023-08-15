import classNames from "classnames";
import { useSelector } from "react-redux";
import cls from "./ProfileCard.module.scss";
import { selectProfile } from "store/profile/selectors/selectProfile";
import { selectProfileError } from "store/profile/selectors/selectProfileError";
import { selectProfileIsLoading } from "store/profile/selectors/selectProfileIsLoading";
import Button, { ButtonTheme } from "component/button/Button";
import { Input } from "component/Input/Input";
import avatar from "../../assets/hacker-cat.jpg";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = () => {
    const profile = useSelector(selectProfile);
    const isLoading = useSelector(selectProfileIsLoading);
    const error = useSelector(selectProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [])}>
            <div className={cls.header}>
                <p className={""}>{"Профиль"}</p>
                <img src={avatar} alt="img" style={{ width: "150px" }} />
            </div>
            <div className={cls.data}>
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {"Редактировать"}
                </Button>
                <Input value={profile?.first} placeholder={"Ваше имя"} className={cls.input} />
                <Input value={profile?.lastname} placeholder={"Ваша фамилия"} className={cls.input} />
            </div>
        </div>
    );
};
