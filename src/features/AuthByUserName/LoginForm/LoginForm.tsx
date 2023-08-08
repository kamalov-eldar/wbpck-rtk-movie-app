import classNames from "classnames";
import cls from "./LoginForm.module.scss";
import Button from "component/button/Button";
import { Input } from "component/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = () => {
    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            <div className={cls.InputWrapper}>
                {<p className={cls.placeholder}>{"username"}</p>}
                <Input autofocus type="text" className={cls.input} />
            </div>
            <div className={cls.InputWrapper}>
                {<p className={cls.placeholder}>{"password"}</p>}
                <Input type="text" className={cls.input} />
            </div>

            <Button className={cls.loginBtn}>Войти</Button>
        </div>
    );
};
