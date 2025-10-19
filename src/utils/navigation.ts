import { routes, isProtectedRoute } from '../routes/routes';

export const navigation = {
  // Get all routes
  getAllRoutes: () => routes,
  
  // Get only public routes
  getPublicRoutes: () => routes.filter(route => !route.protected),
  
  // Get only protected routes
  getProtectedRoutes: () => routes.filter(route => route.protected),
  
  // Check if a route is protected
  isProtected: (path: string) => isProtectedRoute(path),
  
  // Get route by path
  getRoute: (path: string) => routes.find(route => route.path === path),
  
  // Get all route paths
  getAllPaths: () => routes.map(route => route.path),
  
  // Get protected route paths
  getProtectedPaths: () => routes.filter(route => route.protected).map(route => route.path),
  
  // Get public route paths
  getPublicPaths: () => routes.filter(route => !route.protected).map(route => route.path),
  
  // Get routes by title (useful for navigation menus)
  getRoutesByTitle: () => routes.filter(route => route.title),
  
  // Get protected routes by title
  getProtectedRoutesByTitle: () => routes.filter(route => route.protected && route.title),
};

// Export individual functions for convenience
export const {
  getAllRoutes,
  getPublicRoutes,
  getProtectedRoutes,
  isProtected,
  getRoute,
  getAllPaths,
  getProtectedPaths,
  getPublicPaths,
  getRoutesByTitle,
  getProtectedRoutesByTitle,
} = navigation;
