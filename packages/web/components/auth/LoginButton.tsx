import { OAuthButton } from '@myproject/ui';
import Link from 'next/link';
import * as React from 'react';
import { Button, Divider, Header, Modal } from 'semantic-ui-react';
import styled from 'styled-components';
import { RegisterConnector } from './Register';

const LoginButtons = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

const EmailFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginButton = () => (
  <Modal trigger={<Button data-testid="login-button">Log In</Button>}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>Login</Header>
        <LoginButtons>
          <Link passHref href="http://localhost:4000/auth/facebook">
            <OAuthButton service="facebook" size="massive" />
          </Link>
          <Link passHref href="http://localhost:4000/auth/twitter">
            <OAuthButton service="twitter" size="massive" />
          </Link>
          <Link passHref href="http://localhost:4000/auth/github">
            <OAuthButton service="github" size="massive" />
          </Link>
        </LoginButtons>
        <Divider horizontal>Or</Divider>
        <EmailFormWrapper>
          <RegisterConnector />
        </EmailFormWrapper>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);
