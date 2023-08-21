import { RoutePath } from '../../../config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUserAuthData } from 'store/user/selector/selectUserAuthData';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(selectUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.home} state={{ from: location }} replace />;
    }

    return children;
}
