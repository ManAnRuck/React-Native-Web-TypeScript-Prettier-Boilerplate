import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TestComponent } from './TestComponent';

const stories = storiesOf('Test', module);

stories.add('Test div', () => <TestComponent />, { decorators: [centered] });
