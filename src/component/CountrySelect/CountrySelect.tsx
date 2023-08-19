import { memo, useCallback } from 'react';
import { Country } from 'global/types/global';
import classNames from 'classnames';
import { Select } from 'component/Select/Select';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Brasil, content: Country.Brasil },
    { value: Country.Bahamas, content: Country.Bahamas },
    { value: Country.Cuba, content: Country.Cuba },
    { value: Country.Madagascar, content: Country.Madagascar },
];

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={'Укажите страну'}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
