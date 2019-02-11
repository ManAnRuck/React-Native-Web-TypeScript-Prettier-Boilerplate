import { PureQueryOptions } from 'apollo-client';
import * as React from 'react';
import { RegisterComponent, UsersProps } from '../apollo-components';

interface Props {
  children: (data: {
    submit: (values: any) => Promise<null>;
  }) => JSX.Element | null;
  succeded: (user: UsersProps) => Promise<null>;
  refetchQueries?: string[] | PureQueryOptions[];
}

interface FormValues {
  email: string;
  password: string;
}

export class RegisterController extends React.PureComponent<Props> {
  public render() {
    return (
      <RegisterComponent>
        {mutation => {
          const submit = async (values: FormValues) => {
            console.log('refetchQueries', this.props.refetchQueries);
            const user = await mutation({
              variables: {
                email: values.email,
                password: values.password,
              },
              refetchQueries: this.props.refetchQueries,
            });

            if (user) {
              this.props.succeded(user);
            }
            return null;
          };

          return this.props.children({ submit });
        }}
      </RegisterComponent>
    );
  }
}
