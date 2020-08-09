import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Bold } from 'components';

type Variants = 'none' | 'bordered' | 'default' | 'success';
type Sizes = 'large' | 'medium' | 'small';

type Button = {
  children: ReactNode;
  as?: any;
  to?: string;
  variant?: Variants;
  onClick?: () => void;
  disabled?: boolean;
  size?: Sizes;
};

const StyledButton = styled.div<{ variant: Variants; size: Sizes }>`
  padding: 5px 10px;
  transition: all ease 0.4s;
  cursor: pointer;
  min-width: 100px;
  outline: none;
  opacity: ${(props: any) => props.disabled && '50%'};
  border-radius: 4px;
  ${(props) => props.theme.button};
  ${(props) => props.theme.button.variant[props.variant]};
  ${(props) => props.theme.button.size[props.size]};
`;

const Button = ({
  as = 'button',
  variant = 'default',
  size = 'small',
  children,
  ...props
}: Button) => {
  return (
    <StyledButton as={as} variant={variant} size={size} {...props}>
      <Bold>{children}</Bold>
    </StyledButton>
  );
};

export default Button;
