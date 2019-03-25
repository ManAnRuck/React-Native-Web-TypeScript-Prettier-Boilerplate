import centered from '@storybook/addon-centered';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { SemanticICONS, StrictButtonProps } from 'semantic-ui-react';
import { LoginButton } from './LoginButton';
import { OAuthButton } from './OAuthButton';

const stories = storiesOf('Components/Auth', module).add(
  'Login Button',
  () => <LoginButton />,
  { decorators: [centered] },
);

stories.add(
  'OAuth Buttons',
  () => (
    <OAuthButton
      service={
        select(
          'Service',
          ['facebook', 'twitter', 'github'],
          'facebook',
        ) as SemanticICONS
      }
      disabled={boolean('Disabled', false)}
      loading={boolean('Loading', false)}
      size={
        select(
          'Size',
          [
            'mini',
            'tiny',
            'small',
            'medium',
            'large',
            'big',
            'huge',
            'massive',
          ],
          'medium',
        ) as StrictButtonProps['size']
      }
    />
  ),
  { decorators: [centered, withKnobs] },
);
