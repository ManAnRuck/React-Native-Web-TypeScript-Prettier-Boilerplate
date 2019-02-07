import * as React from 'react';
import { Query } from 'react-apollo';

import { MeQuery, MeQuery_me } from '../../schemaTypes';

import meQuery from './mutation';

export interface IMeControllerProps {
  data: { me?: MeQuery_me };
  loading: boolean;
  error: any;
}

interface IProps {
  children: any;
}

class MeControllerQuery extends Query<MeQuery> {}

export const MeController: React.SFC<IProps> = props => (
  <MeControllerQuery query={meQuery}>{props.children}</MeControllerQuery>
);
export { meQuery };
