import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import { RouteElement } from "../../routes/routes";

export const routes: RouteElement[] = [
  {
    to: 'lazy1',
    path: 'lazy1',
    title: 'Lazy Page1',
    element: LazyPage1,
  }, {
    to: 'lazy2',
    path: 'lazy2',
    title: 'Lazy Page2',
    element: LazyPage2,
  }, {
    to: 'lazy3',
    path: 'lazy3',
    title: 'Lazy Page3',
    element: LazyPage3,
  }
];