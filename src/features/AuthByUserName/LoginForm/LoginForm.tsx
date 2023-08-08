import classNames from "classnames";
import cls from "./LoginForm.module.scss";
import Button from "component/button/Button";
import { Input } from "component/Input/Input";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input autofocus type="text" className={cls.input} placeholder={"Введите username"} />
            <Input type="text" className={cls.input} placeholder={"Введите пароль"} />
            <Button className={cls.loginBtn}>"Войти"</Button>
        </div>
    );
};
