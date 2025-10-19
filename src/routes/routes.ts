import React from 'react';
import Analytics from '../pages/Analytics';
import App from '../pages/App';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import SampleScaffold from '../pages/SampleScaffold/SampleScaffold';
import ScaffoldExample from '../pages/ScaffoldExample';

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  protected?: boolean;
  title?: string;
  description?: string;
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: App,
    protected: false,
    title: 'Home',
    description: 'Welcome to PhishGuard',
  },
  {
    path: '/login',
    element: Login,
    protected: false,
    title: 'Login',
    description: 'Sign in to your account',
  },
  {
    path: '/dashboard',
    element: Dashboard,
    protected: true,
    title: 'Dashboard',
    description: 'View phishing detection analytics',
  },
  {
    path: '/analytics',
    element: Analytics,
    protected: true,
    title: 'Analytics',
    description: 'Comprehensive security analytics and metrics',
  },
  {
    path: '/profile',
    element: Profile,
    protected: true,
    title: 'Profile',
    description: 'Manage your account settings',
  },
  {
    path: '/scaffold-example',
    element: ScaffoldExample,
    protected: true,
    title: 'Scaffold Example',
    description: 'Demo of Scaffold component features',
  },
  {
    path: '/sample-scaffold',
    element: SampleScaffold,
    protected: true,
    title: 'Sample Scaffold',
    description: 'Sample data management interface',
  },
];

// Helper functions
export const getProtectedRoutes = () => routes.filter((route) => route.protected);
export const getPublicRoutes = () => routes.filter((route) => !route.protected);
export const getRouteByPath = (path: string) => routes.find((route) => route.path === path);
export const isProtectedRoute = (path: string): boolean => {
  const route = getRouteByPath(path);
  return route?.protected ?? false;
};
