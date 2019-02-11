import * as React from 'react';
import { RegisterComponent, UsersProps } from '../apollo-components';

interface Props {
  children: (data: {
    submit: (values: any) => Promise<null>;
  }) => JSX.Element | null;
  succeded: (user: UsersProps) => Promise<null>;
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
            const user = await mutation({
              variables: {
                email: values.email,
                password: values.password,
              },
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
