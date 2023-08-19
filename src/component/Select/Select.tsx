import { ChangeEvent, memo, useMemo } from "react";
import cls from "./Select.module.scss";
import { TMods } from "global/types/global";
import classNames from "classnames";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const { className, label, options, onChange, value, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionsList = useMemo(
        () =>
            options?.map((opt) => (
                <option className={cls.option} value={opt.value} key={opt.value}>
                    {opt.content}
                </option>
            )),
        [options],
    );

    const mods: TMods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}`}</span>}
            <select disabled={readonly} className={classNames(cls.select, {}, [mods])} value={value} onChange={onChangeHandler}>
                {optionsList}
            </select>
            {/*  <span className={cls.icon}></span>
             */}
        </div>
    );
});
