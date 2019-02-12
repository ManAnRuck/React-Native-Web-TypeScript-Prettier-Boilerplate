import gql from 'graphql-tag';

export default gql`
  query Users {
    users {
      id
      username
    }
  }
`;
