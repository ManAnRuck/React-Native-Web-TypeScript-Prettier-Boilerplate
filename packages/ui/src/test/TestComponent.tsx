import * as React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  width: 100px;
  height: 101px;
  background-color: lightgreen;
`;

export const TestComponent = () => <Test>a test</Test>;
