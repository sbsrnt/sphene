import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type Variants = 'default' | 'success';

type Button = {
  children: ReactNode;
  as?: any;
  to?: string;
  variant?: Variants;
};

const StyledButton = styled.div<{ variant: Variants }>`
  padding: 5px 10px;
  transition: all ease 0.4s;
  ${(props) => props.theme.button}
  ${(props) => props.theme.button[props.variant]}
`;

const Button: FC<Button> = ({ as = 'button', variant = 'default', children, ...props }) => {
  return (
    <StyledButton as={as} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
