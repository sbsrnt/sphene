import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Variants = 'none' | 'bordered' | 'default' | 'success';

type Button = {
  children: ReactNode;
  as?: any;
  to?: string;
  variant?: Variants;
  onClick?: () => void;
};

const StyledButton = styled.div<{ variant: Variants }>`
  padding: 5px 10px;
  transition: all ease 0.4s;
  cursor: pointer;
  ${(props) => props.theme.button}
  ${(props) => props.theme.button[props.variant]}
`;

const Button = ({ as = 'button', variant = 'default', children, ...props }: Button) => {
  return (
    <StyledButton as={as} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
