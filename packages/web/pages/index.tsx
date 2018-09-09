import { add } from '@greatgift/common';
import Link from 'next/link';
import styled from 'styled-components';

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
      <Test>{add(43, 8)}</Test>
    </li>
  </ul>
);
