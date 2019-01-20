import gql from 'graphql-tag';

export default gql`
  query OAuthAccounts {
    me {
      oAuthUsers {
        service
      }
    }
  }
`;
