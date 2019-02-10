import { registerValidationSchema } from '@myproject/common';
import { InputField } from '@myproject/ui';
import { Field, FormikErrors, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { Button, Form } from 'semantic-ui-react';

export interface FormValues {
  email: string;
  password: string;
}

export interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  public render() {
    const { handleSubmit, errors } = this.props;
    console.log({ errors });
    return (
      <Form
        onSubmit={handleSubmit}
        error={!!errors}
        data-testid="register-form"
      >
        <Field name="email" label="E-Mail" required component={InputField} />
        <Field
          name="password"
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
