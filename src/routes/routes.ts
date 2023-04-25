import { LazyExoticComponent, lazy } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

export interface RouteElement {
  to: string;
  path: string;
  title: string;
  element: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

export const routes: RouteElement[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    title: 'Lazy Layout',
    element: LazyLayout,
  }, {
    to: 'no-lazy',
    path: '/no-lazy',
    title: 'No Lazy',
    element: NoLazy,
  }
];
