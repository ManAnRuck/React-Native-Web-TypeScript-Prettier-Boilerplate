import centered from '@storybook/addon-centered';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button, Header, Image, Modal, SemanticICONS } from 'semantic-ui-react';
import { OAuthButton } from './OAuthButton';

const stories = storiesOf('Components/Auth', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Login Button', () => (
    <Modal trigger={<Button>Show Modal</Button>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src="http://lorempixel.com/g/400/400/" />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  ));

stories.add('Login Modal', () => (
  <Modal open={boolean('Open', true)}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src="http://lorempixel.com/g/400/400/" />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
));

stories.add('OAuth Buttons', () => (
  <OAuthButton
    service={
      select(
        'Service',
        ['facebook', 'twitter', 'github'],
        'facebook',
      ) as SemanticICONS
    }
  />
));
