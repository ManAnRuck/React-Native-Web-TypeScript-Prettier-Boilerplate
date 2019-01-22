import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const stories = storiesOf('Components/Auth', module);
stories.addDecorator(withKnobs);
stories.add('Login Button', () => (
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
  <Modal open={true}>
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
