import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import cls from "./ProfilePageHeader.module.scss";
import Button, { ButtonTheme } from "component/button/Button";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "providers/themeProvider/useTheme";
import { profileActions } from "store/profile/slice/profileSlice";
import { selectProfileReadonly } from "store/profile/selectors/selectProfileReadonly";
import { updateProfileData } from "store/profile/slice/updateProfileData";

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = () => {
    const dispatch = useAppDispatch();
    const { theme } = useTheme();
    const readonly = useSelector(selectProfileReadonly);
    console.log("readonly: ", readonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [])}>
            <p className={classNames(cls.PageHeader__title, {}, [theme])}>{"Профиль"}</p>
            {readonly ? (
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                    {"Редактировать"}
                </Button>
            ) : (
                <>
                    <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onCancelEdit}>
                        {"Отменить"}
                    </Button>
                    <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
                        {"Сохранить"}
                    </Button>
                </>
            )}
        </div>
    );
};
