import gql from 'graphql-tag';

export default gql`
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
