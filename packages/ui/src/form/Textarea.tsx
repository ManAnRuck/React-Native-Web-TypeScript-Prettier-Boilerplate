import { FieldProps } from 'formik';
import * as React from 'react';
import { Form, Message } from 'semantic-ui-react';

export const TextAreaField: React.SFC<
  FieldProps<any> & { required: boolean; label: string; placeholder: string }
> = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  required,
  placeholder,
  ...props
}) => {
  return (
    <Form.Field
      required={required}
      error={touched[field.name] && !!errors[field.name]}
    >
      {label && <label>{label}</label>}
      <Form.TextArea placeholder={placeholder || label} {...field} {...props} />
      <Message error content={errors[field.name]} />
    </Form.Field>
  );
};
