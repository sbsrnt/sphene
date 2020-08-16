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
  block?: boolean;
  dataId?: string;
};

const StyledButton = styled.div<{
  variant: Variants;
  size: Sizes;
  block?: boolean;
  disabled?: boolean;
}>`
  padding: 5px 1em;
  transition: all ease 0.4s;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  min-width: 100px;
  outline: none;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  border-radius: 4px;
  width: ${(props) => (props.block ? '100%' : 'initial')};
  ${(props) => props.theme.button};
  ${(props) => props.theme.button.variant[props.variant]};
  ${(props) => props.theme.button.size[props.size]};
`;

const Button = ({
  as = 'button',
  variant = 'default',
  size = 'small',
  block = false,
  children,
  dataId,
  disabled = false,
  ...props
}: Button) => {
  return (
    <StyledButton
      as={as}
      variant={variant}
      size={size}
      block={block}
      data-cy={dataId}
      aria-disabled={disabled}
      disabled={disabled}
      {...props}
    >
      <Bold>{children}</Bold>
    </StyledButton>
  );
};

export default Button;
