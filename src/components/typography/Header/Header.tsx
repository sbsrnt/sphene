import React, { ReactNode } from 'react';
import styled, { StyledProps } from 'styled-components';

type SupportedHeaders = 'h1' | 'h2' | 'h3' | 'h4' | undefined;

type HeaderProps = {
  as?: SupportedHeaders;
  children: ReactNode;
} & StyledProps<any>;

const StyledHeader = styled.div`
  font-size: ${(props: HeaderProps) => props.theme.typography.fontSizes[props.as]};
`;

const Header = ({ as: T = 'h2', children, ...props }: HeaderProps) => (
  <StyledHeader {...props} as={T}>
    {children}
  </StyledHeader>
);

export default Header;
