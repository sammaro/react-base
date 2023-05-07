import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { FormCheckbox, FormInputText, FormSelectBox } from '../components';
import formJson from '../data/custom-form.json';

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required((rule as any).message);
    }

    if (rule.type === "minLength") {
      const minLength = (rule as any).value || 3;
      schema = schema.min(minLength, (rule as any)?.message || `Minimum length is ${minLength}`);
    }

    if (rule.type === "maxLength") {
      const maxLength = (rule as any).value || 3;
      schema = schema.max(maxLength, (rule as any)?.message || `Maximum length is ${maxLength}`);
    }
    if (rule.type === "email") {
      schema = schema.email((rule as any).message);
    }
    if (rule.type === "url") {
      schema = schema.url((rule as any).message);
    }


    requiredFields[input.name] = schema;
  }
}

const validationSchema = Yup.object({ ...requiredFields });

const validInputs = [
  // 'color',
  // 'date',
  // 'datetime-local',
  // 'datetime',
  'email',
  // 'month',
  // 'number',
  'password',
  // 'tel',
  'text',
  // 'time',
  // 'url',
  // 'week',
  // 'year',
]

export const DynamicFormPage = () => {

  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, label, placeholder, options }) => {

              if (validInputs.includes(type)) {
                return <FormInputText
                  key={name}
                  label={label}
                  name={name}
                  type={(type as any)}
                  placeholder={placeholder}
                />
              }

              if (type === 'select') {
                return (
                  <FormSelectBox
                    key={name}
                    label={label}
                    name={name}
                    as="select">
                    <option value="">Choose an option...</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>{label}</option>
                    ))}
                  </FormSelectBox>
                )
              }

              // TODO
              if (type === 'checkbox') {
                return <FormCheckbox
                  key={name}
                  label="Tems"
                  name="terms" />
              }

              if (type === 'radio') {
                return <FormInputText
                  key={name}
                  label={label}
                  name={name}
                  type={(type as any)}
                  placeholder={placeholder}
                />
              }

              if (type === 'textarea') {
                return <FormInputText
                  key={name}
                  label={label}
                  name={name}
                  type={(type as any)}
                  placeholder={placeholder}
                />
              }

              if (type === 'file') {
                return <FormInputText
                  key={name}
                  label={label}
                  name={name}
                  type={(type as any)}
                  placeholder={placeholder}
                />
              }
              // END TODO

              return (
                <span key={name}>Type: {type} no es soportado</span>
              )
            })}

            <button type="button" onClick={formik.handleReset}>Reset</button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div >
  )
}