import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Sublabel = {
  children: ReactNode;
  htmlFor: string;
};

const Label = styled.label`
  font-size: 14px;
  color: ${(props) => props.theme.bg.tertiary};
`;

const Sublabel = ({ children, htmlFor, ...props }: Sublabel) => (
  <Label htmlFor={htmlFor} {...props}>
    {children}
  </Label>
);

export default Sublabel;
