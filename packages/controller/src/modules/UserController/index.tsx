import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

import { UserListQuery, UserListQuery_users } from '../../schemaTypes';

const userListQuery = gql`
  query UserListQuery {
    users {
      username
      githubId
    }
  }
`;

export interface IUserControllerProps {
  data: { users: UserListQuery_users[] };
  loading: boolean;
  error: any;
}

interface IProps {
  children: any;
}

class UserControllerQuery extends Query<UserListQuery> {}

export const UserController: React.SFC<IProps> = props => (
  <UserControllerQuery query={userListQuery}>
    {props.children}
  </UserControllerQuery>
);
