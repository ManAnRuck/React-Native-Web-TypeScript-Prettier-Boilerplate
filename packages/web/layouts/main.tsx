import get from 'lodash.get';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import { LogoutComponent, MeComponent } from '../components/apollo-components';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = (): number => {
  const isSSR = typeof window === 'undefined';

  return isSSR
    ? (Responsive.onlyTablet.minWidth as number)
    : (window.innerWidth as number);
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }: { mobile?: boolean }) => (
  <Container text>
    <Header
      as="h1"
      content="Imagine-a-Company"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as="h2"
      content="Do whatever you want when you want to."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="arrow right" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  public state = {
    fixed: false,
  };

  public hideFixedMenu = () => this.setState({ fixed: false });
  public showFixedMenu = () => this.setState({ fixed: true });

  public render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
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
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item>
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
                    return null;
                  }}
                </MeComponent>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

export default DesktopContainer;
