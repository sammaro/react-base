import { LazyExoticComponent, lazy } from 'react';

type JSXComponent = () => JSX.Element;

interface RouteElement {
  path: string;
  title: string;
  element: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'))

export const routes: RouteElement[] = [
  {
    path: '/',
    title: 'Home',
    element: () => (<h1>Home</h1>),
  }, {
    path: '/lazy1',
    title: 'Lazy 1',
    element: Lazy1,
  }, {
    path: '/lazy2',
    title: 'Lazy 2',
    element: Lazy2,
  }, {
    path: '/lazy3',
    title: 'Lazy 3',
    element: Lazy3,
  }
];
