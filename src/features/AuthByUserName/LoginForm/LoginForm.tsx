import classNames from "classnames";
import cls from "./LoginForm.module.scss";
import Button, { ButtonTheme } from "component/button/Button";
import { Input } from "component/Input/Input";
import { memo, useCallback, useEffect } from "react";
import { useSelector, useStore } from "react-redux";
import { authActions, authReducer } from "store/auth/slice/authSlice";
import { loginByUserName } from "store/auth/slice/loginByUserName";
import { ReduxStoreWithManager } from "providers/storeProvider/StateSchema";
import { selectLoginUsername } from "store/auth/selectors/selectLoginUsername/selectLoginUsername";
import { selectLoginPassword } from "store/auth/selectors/selectLoginPassword/selectLoginPassword";
import { selectLoginIsLoading } from "store/auth/selectors/selectLoginIsLoading/selectLoginIsLoading";
import { selectLoginError } from "store/auth/selectors/selectLoginError/selectLoginError";
import { DynamicModuleLoader, ReducersList } from "component/dynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "store/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
    //  className?: string;
    onSuccess: () => void;
}
const initialReducers: ReducersList = {
    authForm: authReducer,
};

export const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        store.reducerManager.add("authForm", authReducer);
        dispatch({ type: "@INIT loginForm reducer" });
        return () => {
            store.reducerManager.remove("authForm");
            dispatch({ type: "@DESTROY loginForm reducer" });
        };
    }, []);

    //const { username, password, error, isLoading } = useSelector(selectAuthForm);

    const username = useSelector(selectLoginUsername);
    const password = useSelector(selectLoginPassword);
    const isLoading = useSelector(selectLoginIsLoading);
    const error = useSelector(selectLoginError);

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

    const onLoginClick = useCallback(async () => {
        const res = await dispatch(loginByUserName({ username, password }));
        if (res.meta.requestStatus === "fulfilled") {
            onSuccess();
        }
    }, [dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
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
                    <Button theme={ButtonTheme.PRIMARY} disabled={isLoading} onClick={onLoginClick}>
                        Войти
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
});