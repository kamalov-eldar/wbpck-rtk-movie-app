import { memo } from "react";
import IconGrid from "../../assets/svg/IconGrid.svg";
import IconList from "../../assets/svg/IconList.svg";
import cls from "./SwitchingTypeCards.module.scss";
import classNames from "classnames";
import { Button, ButtonTheme } from "component/Button/Button";
import { Icon } from "component/Icon/Icon";

export enum ViewCardsType {
    GRID = "GRID",
    LIST = "LIST",
}

interface SwitchingTypeCardsProps {
    className?: string;
    view?: ViewCardsType;
    onViewClick?: (view: ViewCardsType) => void;
}

const viewTypes = [
    {
        view: ViewCardsType.GRID,
        icon: IconGrid,
    },
    {
        view: ViewCardsType.LIST,
        icon: IconList,
    },
];

export const SwitchingTypeCards = memo((props: SwitchingTypeCardsProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ViewCardsType) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.SwitchingTypeCards, {}, [className])}>
            {viewTypes.map((viewType, idx) => (
                <Button key={idx} theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
                    <Icon Svg={viewType.icon} className={classNames("", { [cls.selected]: viewType.view === view })} />
                </Button>
            ))}
        </div>
    );
});
