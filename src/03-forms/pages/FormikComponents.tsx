import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
      <h1>FormikComponents</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(25, 'Should be less than or equal to 25 characters')
            .required('Required'),
          lastName: Yup.string()
            .max(15, 'Should be less than or equal to 15 characters')
            .required('Required'),
          email: Yup.string()
            .email('Email must be a valid email')
            .required('Required'),
          jobType: Yup.string()
            .notOneOf(['Manager'], 'Not allowed.')
            .required('Job type must be a valid job type name'),
          terms: Yup.boolean()
            .isTrue('Required')
            .required(),
        })}
      >
        {(formik) => (

          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              type="text"
              id="firstName"
              placeholder="First Name" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              type="text"
              id="lastName"
              placeholder="Last Name" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              id="email"
              placeholder="Email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor='jobType'>Job Type</label>
            <Field
              name="jobType"
              as="select"
              id="jobType">
              <option value="">Choose...</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label htmlFor="terms">
              <Field
                name="terms"
                type="checkbox"
                id="terms" />
              Terms
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
            <button type="button" onClick={formik.handleReset}>Reset</button>
          </Form>

        )}
      </Formik>


    </div >
  )
}