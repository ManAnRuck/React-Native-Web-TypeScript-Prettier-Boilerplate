import gql from 'graphql-tag';

export const registerMutation = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      id
      username
    }
  }
`;
