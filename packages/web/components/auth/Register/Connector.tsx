import { RegisterController } from '@myproject/controller';
import Router from 'next/router';
import * as React from 'react';
import { RegisterForm } from './Form';

export class RegisterConnector extends React.PureComponent {
  public succeded = async () => {
    console.log('push');
    Router.replace('/work');
    return null;
  };

  public render() {
    return (
      <RegisterController succeded={this.succeded}>
        {({ submit }) => <RegisterForm submit={submit} />}
      </RegisterController>
    );
  }
}
