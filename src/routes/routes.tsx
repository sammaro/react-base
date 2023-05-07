import {
  DynamicFormPage,
  DynamicFormPagev2,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
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
    title: 'Formik Basic',
    element: FormikBasicPage,
  }, {
    path: '/formikYup',
    title: 'Formik Yup',
    element: FormikYupPage,
  }, {
    path: '/formikComponents',
    title: 'Formik Components',
    element: FormikComponents,
  }, {
    path: '/formikAbstraction',
    title: 'Formik Abstraction',
    element: FormikAbstraction,
  }, {
    path: '/registerFormik',
    title: 'Register Formik Page',
    element: RegisterFormikPage,
  }, {
    path: '/dynamicForm',
    title: 'Dynamic Form Page',
    element: DynamicFormPage,
  }, {
    path: '/dynamicForm2',
    title: 'Dynamic Form Page 2',
    element: DynamicFormPagev2,
  }
];
