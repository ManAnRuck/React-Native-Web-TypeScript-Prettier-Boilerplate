import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

import { MeQuery, MeQuery_me } from '../../schemaTypes';

const userListQuery = gql`
  query MeQuery {
    me {
      username
      githubId
    }
  }
`;

export interface IMeControllerProps {
  data: { me?: MeQuery_me };
  loading: boolean;
  error: any;
}

interface IProps {
  children: any;
}

class MeControllerQuery extends Query<MeQuery> {}

export const MeController: React.SFC<IProps> = props => (
  <MeControllerQuery query={userListQuery}>{props.children}</MeControllerQuery>
);
