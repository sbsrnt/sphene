import React, { ReactNode } from 'react';
import styled from 'styled-components';

type SupportedHeaders = 'h1' | 'h2' | 'h3' | 'h4' | undefined;

type HeaderProps = {
  as?: SupportedHeaders;
  children: ReactNode;
};

const fontSizes = (tag: SupportedHeaders) => {
  switch (tag) {
    case 'h1':
      return 48;
    case 'h2':
      return 32;
    case 'h4':
      return 20;
    default:
      return 24;
  }
};

const StyledHeader = styled.div`
  font-size: ${(props: HeaderProps) => fontSizes(props.as)}px;
`;

const Header = ({ as: T = 'h2', children, ...props }: HeaderProps) => (
  <StyledHeader {...props} as={T}>
    {children}
  </StyledHeader>
);

export default Header;
