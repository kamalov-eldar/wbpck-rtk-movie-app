import { memo } from "react";
import { useSelector } from "react-redux";
import { NavbarItemType } from "../NavbarLinks";
import { Link } from "react-router-dom";
import { selectUserAuthData } from "store/user/selector/selectUserAuthData";

interface NavbarItemProps {
    item: NavbarItemType;
}

export const NavbarItem = memo(({ item }: NavbarItemProps) => {
    const isAuth = useSelector(selectUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return <Link to={item.path}>{item.display}</Link>;
});
