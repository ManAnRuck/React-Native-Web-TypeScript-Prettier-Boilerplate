import gql from 'graphql-tag';

export default gql`
  query MeQuery {
    me {
      id
      username
    }
  }
`;
