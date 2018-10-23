import { add } from '@myproject/common';
import Link from 'next/link';
import styled from 'styled-components';

// Controllers
import { BookController, IBookControllerProps } from '@myproject/controller';

const Test = styled.div`
  font-size: 28px;
  color: green;
`;

export default () => (
  <ul>
    <li>
      <Link href="/a" as="/a">
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href="/b" as="/b">
        <a>b</a>
      </Link>
    </li>
    <li>
      <Test>{add(2, 4)}</Test>
    </li>
    <li>
      <BookController>
        {({ data, loading, error }: IBookControllerProps) => {
          if (error) return null;
          if (loading) return <div>loading…</div>;
          return (
            <ul>
              {data.books.map(({ author, title }) => {
                return <li key={`${title}`}>{`${author} – ${title}`}</li>;
              })}
            </ul>
          );
        }}
      </BookController>
    </li>
  </ul>
);
