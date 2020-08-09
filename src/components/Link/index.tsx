import React, { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

type LinkProps = {
  children?: ReactNode;
  to: string;
};

const StyledLink = styled(RouterLink)`
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Link = ({ children, to, ...props }: LinkProps) => {
  return (
    <StyledLink to={to} {...props}>
      {children}
    </StyledLink>
  );
};

export default Link;
