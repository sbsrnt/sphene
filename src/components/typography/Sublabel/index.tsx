import React, { ReactNode } from 'react';
import styled from 'styled-components';

type SublabelProps = {
  children: ReactNode;
};

const StyledSublabel = styled.span`
  font-size: ${(props) => props.theme.typography.fontSizes.label};
  color: ${(props) => props.theme.colors.gray900};
`;

const Sublabel = ({ children, ...props }: SublabelProps) => (
  <StyledSublabel {...props}>{children}</StyledSublabel>
);

export default Sublabel;
