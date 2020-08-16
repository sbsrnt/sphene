import React, { ReactNode } from 'react';
import styled from 'styled-components';

type SublabelProps = {
  children: ReactNode;
  dataId?: string;
  disabled?: boolean;
};

const StyledSublabel = styled.span<{ disabled?: boolean }>`
  font-size: ${(props) => props.theme.typography.fontSizes.label};
  color: ${(props) => props.theme.colors.gray900};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
`;

const Sublabel = ({ children, dataId, disabled, ...props }: SublabelProps) => (
  <StyledSublabel data-cy={dataId} aria-disabled={disabled} {...props}>
    {children}
  </StyledSublabel>
);

export default Sublabel;
