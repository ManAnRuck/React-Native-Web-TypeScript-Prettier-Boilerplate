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

// interface IProps {
//   children: (data: any) => JSX.Element | null;
// }

export interface IBookControllerProps {
  data: { books: BookListQuery_books[] };
  loading: boolean;
  error: any;
}

// export const BookController = graphql<any, BookListQuery, {}, IBookList>(
//   bookListQuery,
//   {
//     props: ({ data: { loading, books } }) => {
//       return {
//         books,
//         loading,
//       };
//     },
//   },
// );

interface IProps {
  children: any;
}

class BookControllerQuery extends Query<BookListQuery> {}

export const BookController: React.SFC<IProps> = props => (
  <BookControllerQuery query={bookListQuery}>
    {props.children}
  </BookControllerQuery>
);
