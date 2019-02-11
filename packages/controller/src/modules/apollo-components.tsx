export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type LogoutVariables = {};

export type LogoutMutation = {
  __typename?: 'Mutation';

  logout: boolean;
};

export type RegisterVariables = {
  email: string;
  password: string;
};

export type RegisterMutation = {
  __typename?: 'Mutation';

  register: RegisterRegister;
};

export type RegisterRegister = {
  __typename?: 'User';

  id: string;

  username: string;
};

export type MeVariables = {};

export type MeQuery = {
  __typename?: 'Query';

  me: Maybe<MeMe>;
};

export type MeMe = {
  __typename?: 'User';

  id: string;

  username: string;
};

export type OAuthAccountsVariables = {};

export type OAuthAccountsQuery = {
  __typename?: 'Query';

  me: Maybe<OAuthAccountsMe>;
};

export type OAuthAccountsMe = {
  __typename?: 'User';

  id: string;

  oAuthUsers: OAuthAccountsOAuthUsers[];
};

export type OAuthAccountsOAuthUsers = {
  __typename?: 'OAuthUser';

  id: string;

  service: string;
};

export type UsersVariables = {};

export type UsersQuery = {
  __typename?: 'Query';

  users: UsersUsers[];
};

export type UsersUsers = {
  __typename?: 'User';

  id: string;

  username: string;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';

import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export class LogoutComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LogoutMutation, LogoutVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LogoutMutation, LogoutVariables>
        mutation={LogoutDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type LogoutProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LogoutMutation, LogoutVariables>
> &
  TChildProps;
export type LogoutMutationFn = ReactApollo.MutationFn<
  LogoutMutation,
  LogoutVariables
>;
export function LogoutHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LogoutMutation,
        LogoutVariables,
        LogoutProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    LogoutMutation,
    LogoutVariables,
    LogoutProps<TChildProps>
  >(LogoutDocument, operationOptions);
}
export const RegisterDocument = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      id
      username
    }
  }
`;
export class RegisterComponent extends React.Component<
  Partial<ReactApollo.MutationProps<RegisterMutation, RegisterVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterVariables>
        mutation={RegisterDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterVariables
>;
export function RegisterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutation,
        RegisterVariables,
        RegisterProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    RegisterMutation,
    RegisterVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, operationOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      id
      username
    }
  }
`;
export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQuery, MeVariables>
        query={MeDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type MeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQuery, MeVariables>
> &
  TChildProps;
export function MeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQuery,
        MeVariables,
        MeProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    MeQuery,
    MeVariables,
    MeProps<TChildProps>
  >(MeDocument, operationOptions);
}
export const OAuthAccountsDocument = gql`
  query OAuthAccounts {
    me {
      id
      oAuthUsers {
        id
        service
      }
    }
  }
`;
export class OAuthAccountsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<OAuthAccountsQuery, OAuthAccountsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<OAuthAccountsQuery, OAuthAccountsVariables>
        query={OAuthAccountsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type OAuthAccountsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<OAuthAccountsQuery, OAuthAccountsVariables>
> &
  TChildProps;
export function OAuthAccountsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        OAuthAccountsQuery,
        OAuthAccountsVariables,
        OAuthAccountsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    OAuthAccountsQuery,
    OAuthAccountsVariables,
    OAuthAccountsProps<TChildProps>
  >(OAuthAccountsDocument, operationOptions);
}
export const UsersDocument = gql`
  query Users {
    users {
      id
      username
    }
  }
`;
export class UsersComponent extends React.Component<
  Partial<ReactApollo.QueryProps<UsersQuery, UsersVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<UsersQuery, UsersVariables>
        query={UsersDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UsersProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<UsersQuery, UsersVariables>
> &
  TChildProps;
export function UsersHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        UsersQuery,
        UsersVariables,
        UsersProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    UsersQuery,
    UsersVariables,
    UsersProps<TChildProps>
  >(UsersDocument, operationOptions);
}
