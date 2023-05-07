import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { FormInputText } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={
          Yup.object({
            name: Yup.string()
              .min(2, 'Min 2 characters required')
              .max(15, 'Should be less than or equal to 15 characters')
              .required('Required'),
            email: Yup.string()
              .email('Email must be a valid email')
              .required('Required'),
            password: Yup.string()
              .min(6, 'Min 6 characters required')
              .max(12, 'Should be less than or equal to 12 characters')
              .required('Required'),
            passwordConfirmation: Yup.string()
              .oneOf([Yup.ref('password')], "Password not marches")
              .min(6, 'Min 6 characters required')
              .max(12, 'Should be less than or equal to 12 characters')
              .required('Required')
          })
        }
      >
        {({ handleReset }) => (
          <Form>

            <FormInputText
              label="Name"
              name="name"
              placeholder="Name"
            />

            <FormInputText
              label="Email"
              name="email"
              placeholder="mail@domain.com"
              type="email"
            />

            <FormInputText
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
            />

            <FormInputText
              label="Password Confirmation"
              name="passwordConfirmation"
              placeholder="Password Confirmation"
              type="password"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </Form>
        )}

      </Formik>

    </div >
  )
}