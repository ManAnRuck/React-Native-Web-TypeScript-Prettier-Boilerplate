import * as React from 'react';
import { RegisterComponent } from '../apollo-components';

interface Props {
  children: (data: {
    submit: (values: any) => Promise<null>;
  }) => JSX.Element | null;
}

interface FormValues {
  email: string;
  password: string;
}

export class RegisterController extends React.PureComponent<Props> {
  public handleSubmit = async (values: FormValues) => {
    console.log('values', values);
    return null;
  };

  public render() {
    return (
      <RegisterComponent>
        {() => {
          return this.props.children({ submit: this.handleSubmit });
        }}
      </RegisterComponent>
    );
  }
}
