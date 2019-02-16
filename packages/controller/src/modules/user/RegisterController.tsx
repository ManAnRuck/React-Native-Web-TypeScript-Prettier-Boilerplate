import { PureQueryOptions } from 'apollo-client';
import * as React from 'react';
import { RegisterComponent } from '../apollo-components';

interface FormValues {
  email: string;
  password: string;
}

interface Errors {
  [key: string]: string;
}

interface Props {
  children: (data: {
    submit: (values: FormValues) => Promise<Errors | null>;
  }) => JSX.Element | null;
  succeded: () => Promise<null>;
  refetchQueries?: string[] | PureQueryOptions[];
}

export class RegisterController extends React.PureComponent<Props> {
  public render() {
    return (
      <RegisterComponent>
        {mutation => {
          const submit = async (values: FormValues) => {
            try {
              await mutation({
                variables: {
                  email: values.email,
                  password: values.password,
                },
                refetchQueries: this.props.refetchQueries,
              });

              this.props.succeded();
              return null;
            } catch (err) {
              const errors: Errors = {};
              err.graphQLErrors.forEach(
                ({
                  message,
                  formField,
                }: {
                  message: string;
                  formField: string;
                }) => {
                  errors[formField] = message;
                },
              );
              return errors;
            }
          };

          return this.props.children({ submit });
        }}
      </RegisterComponent>
    );
  }
}
