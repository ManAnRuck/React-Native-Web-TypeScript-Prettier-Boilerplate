import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

import { BookListQuery } from '../../schemaTypes';

const bookListQuery = gql`
  query BookListQuery {
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
    return (
      <Query<BookListQuery> query={bookListQuery}>{this.props.children}</Query>
    );
  }
}
