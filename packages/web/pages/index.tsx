import { add } from '@myproject/common';
import Link from 'next/link';
import { Button, Flag } from 'semantic-ui-react';
import styled from 'styled-components';

// Styles
import '../assets/styles/styles.less';

// Controllers
import { IUserControllerProps, UserController } from '@myproject/controller';

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
      <Button>test</Button>
      <Flag name="th" />
    </li>
    <li>
      <UserController>
        {({ data, loading, error }: IUserControllerProps) => {
          if (error) return null;
          if (loading) return <div>loading…</div>;
          return (
            <ul>
              {data.users.map(({ username, githubId }) => {
                return <li key={githubId}>{`${githubId} – ${username}`}</li>;
              })}
            </ul>
          );
        }}
      </UserController>
    </li>
  </ul>
);
