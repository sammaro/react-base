import { Navigate } from 'react-router-dom';

interface RouteElement {
  path: string;
  title: string;
  element: JSX.Element;
}

export const routes: RouteElement[] = [
  {
    path: '/',
    title: 'Home',
    element: <h1>Home</h1>,
  }, {
    path: '/users',
    title: 'Users',
    element: <h1>users</h1>,
  }, {
    path: '/about',
    title: 'About',
    element: <h1>about</h1>,
  }, {
    path: '/*',
    title: '',
    element: <Navigate to={"/"} replace />,
  }
];
