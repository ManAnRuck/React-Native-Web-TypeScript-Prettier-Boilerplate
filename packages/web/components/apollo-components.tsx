export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type LogoutVariables = {};

export type LogoutMutation = {
  __typename?: 'Mutation';

  logout: boolean;
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

  oAuthUsers: OAuthAccountsOAuthUsers[];
};

export type OAuthAccountsOAuthUsers = {
  __typename?: 'OAuthUser';

  service: string;
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
      oAuthUsers {
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
