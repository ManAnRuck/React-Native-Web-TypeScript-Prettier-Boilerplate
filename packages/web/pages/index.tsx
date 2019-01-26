// GraphQl
import { meQuery } from '@myproject/controller';
import get from 'lodash.get';
import { PureComponent } from 'react';
import '../assets/styles/styles.less';
import {
  MeComponent,
  OAuthAccountsComponent,
} from '../components/apollo-components';
// Layout
import Page from '../layouts/main';
import { INextContextWithApollo } from '../types/NextContextWithApollo';

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
      <Page>
        <div>
          <MeComponent>
            {({ data, loading, error }) => {
              if (error) return null;
              if (loading) return <div>loading…</div>;

              const isLoggedIn = !!get(data, 'me', false);

              return (
                <div>
                  <h1>React-Native-Web-TypeScript-Prettier-Boilerplate</h1>
                  {isLoggedIn && (
                    <li key={data!.me!.id}>
                      <div>Test 1</div>
                      <OAuthAccountsComponent fetchPolicy="network-only">
                        {({
                          data: oData,
                          loading: oLoading,
                          error: oError,
                        }) => {
                          if (oError) return null;
                          if (oLoading) return <div>loading…</div>;

                          return <div>{JSON.stringify(oData)}</div>;
                        }}
                      </OAuthAccountsComponent>
                    </li>
                  )}
                </div>
              );
            }}
          </MeComponent>
        </div>
      </Page>
    );
  }
}
