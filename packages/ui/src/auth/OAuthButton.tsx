import * as React from 'react';
import { Button, SemanticICONS, StrictButtonProps } from 'semantic-ui-react';
import styled from 'styled-components';

interface OAuthButtonProps extends StrictButtonProps {
  service: SemanticICONS;
}

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

export const OAuthButton: React.SFC<OAuthButtonProps> = ({
  service,
  ...rest
}) => {
  let customColor;
  let color: StrictButtonProps['color'];
  switch (service) {
    case 'github':
      customColor = service;
      break;
    default:
      color = service as StrictButtonProps['color'];
      break;
  }

  return (
    <ButtonOAuth
      {...rest}
      customColor={customColor}
      icon={service}
      color={color}
    />
  );
};
