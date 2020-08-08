import React, { ReactNode } from 'react';

type SupportedHeaders = 'h1' | 'h2' | 'h3' | 'h4';

type HeaderProps = {
  as?: SupportedHeaders;
  children: ReactNode;
};

const Header = ({ as: T = 'h2', children, ...props }: HeaderProps) => <T {...props}>{children}</T>;

export default Header;
