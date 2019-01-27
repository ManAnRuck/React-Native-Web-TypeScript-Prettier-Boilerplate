import centered from '@storybook/addon-centered';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { WishListCard } from './WishlistCard';

const stories = storiesOf('Components/Wishlist', module);
stories.addDecorator(withKnobs).addDecorator(centered);

stories.add('WishlistCard', () => (
  <WishListCard
    title={text('Title', '30. Geburtstag')}
    date={text('Date', '28.03.2019')}
    description={text('Description', 'Wird bestimmt eine tolle Party')}
    gifts={number('Gifts', 8)}
    members={number('Members', 11)}
  />
));
