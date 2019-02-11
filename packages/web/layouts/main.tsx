import { LogoutComponent, MeComponent } from '@myproject/controller';
import get from 'lodash.get';
import Link from 'next/link';
import { SingletonRouter, withRouter } from 'next/router';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import '../assets/styles/styles.less';
import { LoginButton } from '../components/auth/LoginButton';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component<SingletonRouter> {
  public state = {
    fixed: false,
  };

  public hideFixedMenu = () => this.setState({ fixed: false });
  public showFixedMenu = () => this.setState({ fixed: true });

  public render() {
    const { children, router } = this.props;
    const { fixed } = this.state;

    return (
      <>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ padding: '1em 0em', marginBottom: '1em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Link href="/" passHref>
                  <Menu.Item active={router!.asPath === '/'}>Home</Menu.Item>
                </Link>
                <Link href="/work" passHref>
                  <Menu.Item active={router!.asPath === '/work'}>
                    Work
                  </Menu.Item>
                </Link>
                <Link href="/company" passHref>
                  <Menu.Item active={router!.asPath === '/company'}>
                    Company
                  </Menu.Item>
                </Link>
                <MeComponent>
                  {({ data }) => {
                    const isLoggedIn = !!get(data, 'me', false);
                    if (isLoggedIn) {
                      return (
                        <LogoutComponent>
                          {(mutate, { client }) => (
                            <Menu.Item position="right">
                              <Button
                                as="a"
                                inverted={!fixed}
                                data-testid="logout-button"
                                onClick={async () => {
                                  await mutate();
                                  await client.resetStore();
                                }}
                              >
                                Logout
                              </Button>
                            </Menu.Item>
                          )}
                        </LogoutComponent>
                      );
                    }

                    return (
                      <Menu.Item position="right">
                        <LoginButton />
                      </Menu.Item>
                    );

                    return null;
                  }}
                </MeComponent>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        <Container>{children}</Container>
      </>
    );
  }
}

export default withRouter<any>(DesktopContainer);
