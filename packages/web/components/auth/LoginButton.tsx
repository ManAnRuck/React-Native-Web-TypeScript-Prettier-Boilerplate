import { OAuthButton } from '@myproject/ui';
import Link from 'next/link';
import * as React from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import styled from 'styled-components';

const LoginButtons = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

export const LoginButton = () => (
  <Modal trigger={<Button>Log In</Button>}>
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
      </Modal.Description>
    </Modal.Content>
  </Modal>
);
