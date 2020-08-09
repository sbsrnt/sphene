import React, { ReactNode } from 'react';
import styled from 'styled-components';

type BodySmallProps = {
  children?: ReactNode;
};

const StyledBodySmall = styled.p`
  font-size: ${(props) => props.theme.typography.fontSizes.small};
`;

const BodySmall = ({ children, ...props }: BodySmallProps) => (
  <StyledBodySmall {...props}>{children}</StyledBodySmall>
);

export default BodySmall;
