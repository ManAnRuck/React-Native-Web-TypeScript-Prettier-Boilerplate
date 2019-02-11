import { RegisterController } from '@myproject/controller';
import * as React from 'react';
import { RegisterForm } from './Form';

export class RegisterConnector extends React.PureComponent {
  public render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterForm submit={submit} />}
      </RegisterController>
    );
  }
}
