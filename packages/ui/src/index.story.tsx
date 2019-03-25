import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Button, Flag, Header, Image, Modal } from 'semantic-ui-react';

const stories = storiesOf('Components/Button', module);

stories.add(
  'default',
  () => (
    <Button disabled={boolean('Disabled', true)} onClick={action('onClick')}>
      {text('Label', 'Default')}
    </Button>
  ),
  { decorators: [withKnobs] },
);

stories.add('default flag', () => <Flag name="myanmar" />);
stories.add('default modal', () => (
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
