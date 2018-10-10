import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

import { BookListQuery, BookListQuery_books } from '../../schemaTypes';

const bookListQuery = gql`
  query BookListQuery {
    books {
      title
      author
    }
  }
`;

export interface IBookControllerProps {
  data: { books: BookListQuery_books[] };
  loading: boolean;
  error: any;
}

interface IProps {
  children: any;
}

class BookControllerQuery extends Query<BookListQuery> {}

export const BookController: React.SFC<IProps> = props => (
  <BookControllerQuery query={bookListQuery}>
    {props.children}
  </BookControllerQuery>
);
