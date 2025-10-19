import { useLocation } from 'react-router-dom';
import { getRouteByPath, isProtectedRoute, routes } from '../routes/routes';

export const useRoutes = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const currentRoute = getRouteByPath(currentPath);
  const isCurrentRouteProtected = isProtectedRoute(currentPath);

  return {
    routes,
    currentPath,
    currentRoute,
    isCurrentRouteProtected,
    getRouteByPath,
    isProtectedRoute,
  };
};
