import React, { ReactNode } from 'react';
import styled from 'styled-components';

type LabelProps = {
  children: ReactNode;
  htmlFor: string;
};

const StyledLabel = styled.label`
  font-size: ${(props) => props.theme.typography.fontSizes.label};
  color: ${(props) => props.theme.colors.gray700};
`;

const Label = ({ children, htmlFor, ...props }: LabelProps) => (
  <StyledLabel htmlFor={htmlFor} {...props}>
    {children}
  </StyledLabel>
);

export default Label;
