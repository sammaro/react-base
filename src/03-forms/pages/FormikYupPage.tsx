import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

  const { errors, touched, getFieldProps,
    handleReset, handleSubmit } = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values)
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(25, 'Should be less than or equal to 25 characters')
          .required('Required'),
        lastName: Yup.string()
          .max(15, 'Should be less than or equal to 15 characters')
          .required('Required'),
        email: Yup.string()
          .email('Email must be a valid email')
          .required('Required'),
      }),
    });

  return (
    <div>
      <h1>FormikYupPage</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...getFieldProps('firstName')}
        />
        <span>{touched.firstName && errors.firstName}</span>

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...getFieldProps('lastName')}
        />
        <span>{touched.lastName && errors.lastName}</span>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...getFieldProps('email')}
        />
        <span>{touched.email && errors.email}</span>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

    </div>
  )
}