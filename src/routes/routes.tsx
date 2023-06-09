import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

interface RouteElement {
  path: string;
  title: string;
  element: () => JSX.Element;
}

export const routes: RouteElement[] = [
  {
    path: '/',
    title: 'Home',
    element: () => (<h1>Home</h1>),
  }, {
    path: '/lazy1',
    title: 'Lazy 1',
    element: LazyPage1,
  }, {
    path: '/lazy2',
    title: 'Lazy 2',
    element: LazyPage2,
  }, {
    path: '/lazy3',
    title: 'Lazy 3',
    element: LazyPage3,
  }
];
