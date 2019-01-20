import { add } from '@myproject/common';
import Link from 'next/link';
import { Button, Flag } from 'semantic-ui-react';
import styled from 'styled-components';

// Styles
import '../assets/styles/styles.less';

// Controllers
import {
  IMeControllerProps,
  IUserControllerProps,
  MeController,
  UserController,
} from '@myproject/controller';

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
      <Link passHref href="http://localhost:4000/auth/github">
        <Button icon="github" />
      </Link>
      <Link passHref href="http://localhost:4000/auth/facebook">
        <Button icon="facebook" />
      </Link>
      <Link passHref href="http://localhost:4000/auth/twitter">
        <Button icon="twitter" />
      </Link>
      <Flag name="th" />
    </li>
    <li>
      <UserController>
        {({ data, loading, error }: IUserControllerProps) => {
          if (error) return null;
          if (loading) return <div>loading…</div>;
          return (
            <ul>
              {data.users.map(({ username, id }) => {
                return <li key={id}>{`${id} – ${username}`}</li>;
              })}
            </ul>
          );
        }}
      </UserController>
    </li>
    <li>
      <MeController>
        {({ data, loading, error }: IMeControllerProps) => {
          if (error) return null;
          if (loading) return <div>loading…</div>;
          return (
            <ul>
              {data.me && (
                <li key={data.me.id}>{`${data.me.id} – ${
                  data.me.username
                }`}</li>
              )}
              {!data.me && <li>not loged in</li>}
            </ul>
          );
        }}
      </MeController>
    </li>
  </ul>
);
