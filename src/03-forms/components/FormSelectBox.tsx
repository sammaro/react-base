import { ErrorMessage, Field, useField } from "formik";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const FormSelectBox = ({ label, ...props }: Props) => {

  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}