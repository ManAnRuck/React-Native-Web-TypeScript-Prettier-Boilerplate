import * as React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const TestComponent = () => <Test>a test</Test>;
