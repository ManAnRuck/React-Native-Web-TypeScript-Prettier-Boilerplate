import { boolean, text } from '@storybook/addon-knobs';
import { Field, FormikErrors, FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { InputField } from './InputField';
import { TextAreaField } from './TextareaField';

export interface FormValues {
  title: string;
  description: string;
}

export interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  public render() {
    const { handleSubmit } = this.props;
    return (
      <Form
        onSubmit={handleSubmit}
        error={boolean('show errors', false, 'Form')}
      >
        <Message
          error
          header={'asdf'}
          content="You can only sign up for an account once with a given e-mail address."
        />
        <Field
          name="input"
          label={text('(input)label', 'Title', 'Input')}
          required={boolean('(input)required', false, 'Input')}
          placeholder={text('(input)placeholder', '', 'Input')}
          component={InputField}
          form={{ touched: false, errors: { input: 'FEHLER' } }}
        />
        <Field
          name="textarea"
          label={text('(textarea)label', 'Description', 'TextArea')}
          placeholder={text(
            '(textarea)placeholder',
            'Tell us more about your party…',
            'TextArea',
          )}
          component={TextAreaField}
        />
        <Form.Field required>
          <Button type="submit">Add</Button>
        </Form.Field>
      </Form>
    );
  }
}

export const FormExample = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ title: '', description: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  },
})(C);
