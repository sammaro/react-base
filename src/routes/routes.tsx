import {
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from '../03-forms/pages/';

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
    path: '/register',
    title: 'Register',
    element: RegisterPage,
  }, {
    path: '/formikBasic',
    title: 'FormikBasic',
    element: FormikBasicPage,
  }, {
    path: '/formikYup',
    title: 'FormikYup',
    element: FormikYupPage,
  }, {
    path: '/formikComponents',
    title: 'FormikComponents',
    element: FormikComponents,
  }, {
    path: '/formikAbstraction',
    title: 'FormikAbstraction',
    element: FormikAbstraction,
  }
];
