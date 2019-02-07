import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormExample, FormValues } from './FormExample';

const stories = storiesOf('Components/Form', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('FormExample', () => {
  const handleSubmit = async (values: FormValues) => {
    action('handleSubmit')(values);
    console.log('values', values);
    return null;
  };
  return <FormExample submit={handleSubmit} />;
});
