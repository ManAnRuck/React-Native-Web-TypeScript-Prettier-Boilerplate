import { InputField } from '@myproject/ui';
import { Field, FormikErrors, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

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
        <Message
          error
          header={'asdf'}
          content="You can only sign up for an account once with a given e-mail address."
        />
        <Field
          name="input"
          label="E-Mail"
          required
          component={InputField}
          form={{ touched: false, errors: { input: 'FEHLER' } }}
        />
        <Field
          name="password"
          label="Passwort"
          required
          component={InputField}
          form={{ touched: false, errors: { input: 'FEHLER' } }}
        />
        <Form.Field required>
          <Button type="submit">Add</Button>
        </Form.Field>
      </Form>
    );
  }
}

export const RegisterForm = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
