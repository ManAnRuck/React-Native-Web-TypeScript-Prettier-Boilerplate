import * as React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const ExtraContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface WishListCardProps {
  title: string;
  date: string;
  description: string;
  gifts: number;
  members: number;
  href?: string;
}

export const WishListCard = ({
  title,
  date,
  description,
  gifts,
  members,
  href,
}: WishListCardProps) => (
  <Card href={href}>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className="date">{date}</span>
      </Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <ExtraContent>
        <a>
          <Icon name="gift" />
          {gifts} Geschenke
        </a>
        <a>
          <Icon name="user" />
          {members} Teilnehmer
        </a>
      </ExtraContent>
    </Card.Content>
  </Card>
);
