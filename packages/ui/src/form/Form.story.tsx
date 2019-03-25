import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FormExample, FormValues } from './FormExample';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Components/Form', module);

stories.add(
  'FormExample',
  () => {
    const handleSubmit = async (values: FormValues) => {
      action('handleSubmit')(values);
      return null;
    };
    return <FormExample submit={handleSubmit} />;
  },
  { decorators: [centered, withKnobs] },
);
