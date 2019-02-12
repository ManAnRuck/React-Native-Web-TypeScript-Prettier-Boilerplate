import { add } from '@myproject/common';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Platform, Text, View } from 'react-native';
import styled from 'styled-components/native';

// GraphQl
import { client } from './src/graphql/initApollo';

// Components
import { UsersComponent } from '@myproject/controller';

const instructions = Platform.select({
  android:
    'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
});

const Container = styled.View`
  align-items: center;
  background-color: #f5fcff;
  flex: 1;
  justify-content: center;
`;

const Welcome = styled.Text`
  font-size: 20;
  margin: 10px;
  text-align: center;
  color: green;
`;

const Instructions = styled.Text`
  color: red;
  margin-bottom: 5px;
  text-align: center;
`;

// tslint:disable-next-line:no-empty-interface
interface IProps {}
export default class App extends Component<IProps> {
  public render() {
    return (
      <ApolloProvider client={client}>
        <Container>
          <Welcome>Welcome to React Native!</Welcome>
          <Instructions>To get started, edit App.js</Instructions>
          <Instructions>{instructions}</Instructions>
          <Instructions>{add(3, 9)}</Instructions>
          <UsersComponent>
            {({ data, loading, error }) => {
              if (error) return null;
              if (loading) return <Text>loading…</Text>;
              return (
                <View>
                  {data!.users.map(({ username, id }) => {
                    return <Text key={`${id}`}>{`${id} – ${username}`}</Text>;
                  })}
                </View>
              );
            }}
          </UsersComponent>
        </Container>
      </ApolloProvider>
    );
  }
}
