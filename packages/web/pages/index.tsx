import get from 'lodash.get';
import { PureComponent } from 'react';
import { INextContextWithApollo } from '../types/NextContextWithApollo';

// GraphQl
import {
  IMeControllerProps,
  MeController,
  meQuery,
} from '@myproject/controller';

// Styles
import Link from 'next/link';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import '../assets/styles/styles.less';
import { LogoutComponent, MeComponent } from '../components/apollo-components';

export default class Index extends PureComponent {
  public static async getInitialProps({
    apolloClient,
  }: INextContextWithApollo) {
    const response: any = await apolloClient.query({
      query: meQuery,
    });
    return response.data.me || {};
  }

  public render() {
    return (
      <div>
        <Link href="c">
          <a>C</a>
        </Link>
        <MeComponent>
          {({ data, loading, error }) => {
            if (error) return null;
            if (loading) return <div>loading…</div>;

            const isLoggedIn = !!get(data, 'me', false);

            return (
              <div>
                {isLoggedIn && (
                  <li key={data!.me!.id}>
                    {`${data!.me!.id} – ${data!.me!.username}`}
                    <br />
                    <LogoutComponent>
                      {(mutate, { client }) => (
                        <Button
                          onClick={async () => {
                            await mutate();
                            await client.resetStore();
                          }}
                        >
                          Logout
                        </Button>
                      )}
                    </LogoutComponent>
                  </li>
                )}
                {!isLoggedIn && (
                  <div>
                    <h1>Login</h1>
                    <Link passHref href="http://localhost:4000/auth/github">
                      <Button icon="github" />
                    </Link>
                    <Link passHref href="http://localhost:4000/auth/facebook">
                      <Button icon="facebook" />
                    </Link>
                    <Link passHref href="http://localhost:4000/auth/twitter">
                      <Button icon="twitter" />
                    </Link>
                  </div>
                )}
              </div>
            );
          }}
        </MeComponent>
        {JSON.stringify(this.props, null, 2)}
      </div>
    );
  }
}
