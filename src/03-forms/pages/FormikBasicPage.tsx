import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}


export const FormikBasicPage = () => {

  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName.trim()) {
      errors.firstName = 'Required';
    } else if (firstName.length > 25) {
      errors.firstName = 'Must be 15 characters or less';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Required';
    } else if (lastName.length > 15) {
      errors.lastName = 'Must be 15 characters or less';
    }
    if (!email.trim()) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  const { errors, touched, values, handleBlur, handleChange, handleReset, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validate,
  });

  return (
    <div>
      <h1>FormikBasicPage</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <span>{touched.firstName && errors.firstName}</span>

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <span>{touched.lastName && errors.lastName}</span>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <span>{touched.email && errors.email}</span>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

    </div>
  )
}