import { registerValidationSchema } from '@myproject/common';
import { InputField } from '@myproject/ui';
import { Field, FormikErrors, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

export interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  form?: string;
}

export interface Props {
  submit: (
    values: FormValues,
  ) => Promise<FormikErrors<FormValues & FormErrors> | null>;
}

interface Error {
  path: string;
  message: string;
}

export const normalizeErrors = (errors: Error[]) => {
  const errMap: { [key: string]: string } = {};

  errors.forEach(err => {
    errMap[err.path] = err.message;
  });

  return errMap;
};

class C extends React.PureComponent<
  FormikProps<FormValues & FormErrors> & Props
> {
  public render() {
    const { handleSubmit, errors } = this.props;
    console.log(errors);
    return (
      <Form
        onSubmit={handleSubmit}
        error={!!errors}
        data-testid="register-form"
      >
        {errors.form && (
          <Message negative={!!errors.form}>{errors.form}</Message>
        )}
        <Field name="email" label="E-Mail" required component={InputField} />
        <Field
          name="password"
          type="password"
          label="Passwort"
          required
          component={InputField}
        />
        <Form.Field required>
          <Button type="submit">LogIn / Register</Button>
        </Form.Field>
      </Form>
    );
  }
}

export const RegisterForm = withFormik<Props, FormValues>({
  validationSchema: registerValidationSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
