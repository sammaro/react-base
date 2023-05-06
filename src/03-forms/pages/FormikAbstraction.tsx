import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { FormCheckbox, FormInputText, FormSelectBox } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>FormikAbstraction</h1>

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

            <FormInputText
              label="First Name"
              name="firstName"
              placeholder="John"
            />

            <FormInputText
              label="Last Name"
              name="lastName"
              placeholder="Doe"
            />

            <FormInputText
              label="Email"
              name="email"
              placeholder="mail@domain.com"
              type="email"
            />

            <FormSelectBox
              as='select'
              label='jobType'
              name="jobType">
              <option value="">Choose...</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </FormSelectBox>

            <FormCheckbox
              label="Tems"
              name="terms" />

            <button type="submit">Submit</button>
            <button type="button" onClick={formik.handleReset}>Reset</button>
          </Form>

        )}
      </Formik>


    </div >
  )
}