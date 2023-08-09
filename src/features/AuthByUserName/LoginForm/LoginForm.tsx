import classNames from "classnames";
import cls from "./LoginForm.module.scss";
import Button, { ButtonTheme } from "component/button/Button";
import { Input } from "component/Input/Input";
import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "store/auth/slice/authSlice";
import { selectAuthForm } from "store/auth/selector/selectAuth";
import { loginByUserName } from "store/auth/slice/loginByUserName";

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(() => {
    const dispatch = useDispatch();

    const { username, password, error, isLoading } = useSelector(selectAuthForm);

    const onChangeUserName = useCallback(
        (value: string) => {
            dispatch(authActions.setUserName(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(authActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            <div className={cls.InputWrapper}>
                {<p className={cls.placeholder}>{"username"}</p>}
                <Input value={username} onChange={onChangeUserName} autofocus type="text" className={cls.input} />
            </div>
            <div className={cls.InputWrapper}>
                {<p className={cls.placeholder}>{"password"}</p>}
                <Input value={password} onChange={onChangePassword} type="text" className={cls.input} />
            </div>
            <div className={cls.buttonWrapper}>
                <div className={cls.error}>{error && <p className={cls.errorText}>{error}</p>}</div>
                <Button theme={ButtonTheme.PRIMARY} disabled={isLoading} onClick={onLoginClick} style={{ marginTop: "20px" }}>
                    Войти
                </Button>
            </div>
        </div>
    );
});
