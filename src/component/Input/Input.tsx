import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import classNames from "classnames";

import cls from "./Input.module.scss";
import { TMods } from "global/types/global";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;
// Omit позволяет забрать из типов все пропсы но исключ то что не нужно вторым аргументом, первый что берем
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
    placeholder?: string;
    label?: string;
    field: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        autofocus,
        readonly,
        placeholder,
        label,
        field,
        children,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const mods: TMods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {label && <label htmlFor={`${field}-field`} className={cls.label}>{`${label}`}</label>}
            <input
                id={`${field}-field`}
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.input, {}, [mods])}
                onFocus={onFocus}
                onBlur={onBlur}
                onSelect={onSelect}
                readOnly={readonly}
                placeholder={placeholder}
                {...otherProps}
            />
            {children}
        </div>
    );
});
