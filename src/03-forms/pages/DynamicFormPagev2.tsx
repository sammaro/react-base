import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { FormInputText, FormSelectBox } from '../components';
import formJson from '../data/custom-form.json';

interface Fields {
  [key: string]: any
}

export const DynamicFormPagev2 = () => {

  const initialValues: { [key: string]: any } = {
    ...formJson.reduce((a, v) => {
      return { ...a, [v.name]: v.value };
    }, {}),
  };

  const requiredFields = {
    ...formJson.reduce((a, v) => {
      if (v.validations) {
        let schema = Yup.string();
        for (const rule of v.validations) {
          if (rule.type === "required") {
            schema = schema.required((rule as any).message);
          }
          if (rule.type === "minLength") {
            schema = schema.min(
              (rule as any).value || 1,
              `Minimo de ${(rule as any).value || 1} caracteres`
            );
          }
          if (rule.type === "email") {
            schema = schema.email((rule as any).message);
          }
        }
        return { ...a, [v.name]: schema };
      }
      return { ...a };
    }, {}),
  };

  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({ ...requiredFields })}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, label, placeholder, options }) => {

              const props = {
                key: name,
                label,
                name,
                placeholder,
                options,
                type: (type as any)
              }

              const fields: Fields = {
                text: <FormInputText {...props} />,
                email: <FormInputText {...props} />,
                password: <FormInputText {...props} />,
                select: (
                  <FormSelectBox as="select" {...props}>
                    <option value="">Choose an option...</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>{label}</option>
                    ))}
                  </FormSelectBox>
                )
              }

              return fields[type]
            })}

            <button type="button" onClick={formik.handleReset}>Reset</button>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div >
  )
}