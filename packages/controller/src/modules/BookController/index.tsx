import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

const booksQuery = gql`
  query books {
    books {
      title
      author
    }
  }
`;

interface IProps {
  children: (data: any) => JSX.Element | null;
}

export class BookController extends React.PureComponent<IProps> {
  public render() {
    return <Query query={booksQuery}>{this.props.children}</Query>;
  }
}
