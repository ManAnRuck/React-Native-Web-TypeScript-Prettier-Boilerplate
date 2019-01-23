import * as React from 'react';
import { Button, SemanticCOLORS, SemanticICONS } from 'semantic-ui-react';
import styled from 'styled-components';

export interface OAuthButtonProps {
  service: SemanticICONS;
}

type Colors =
  | SemanticCOLORS
  | 'facebook'
  | 'google plus'
  | 'vk'
  | 'twitter'
  | 'linkedin'
  | 'instagram'
  | 'youtube'
  | undefined;

const ButtonOAuth = styled(({ customColor, ...rest }) => <Button {...rest} />)`
  &&& {
    background-color: ${({ customColor }) =>
      customColor === 'github' ? '#d1b643' : ''};
    &:hover {
      background-color: ${({ customColor }) =>
        customColor === 'github' ? '#c2a730' : ''};
    }
  }
`;

export const OAuthButton: React.SFC<OAuthButtonProps> = ({ service }) => {
  let customColor;
  let color: Colors;
  switch (service) {
    case 'github':
      customColor = service;
      break;
    default:
      color = service as Colors;
      break;
  }

  return <ButtonOAuth customColor={customColor} icon={service} color={color} />;
};
