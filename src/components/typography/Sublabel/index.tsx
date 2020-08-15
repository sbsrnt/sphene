import React, { ReactNode } from 'react';
import styled from 'styled-components';

type SublabelProps = {
  children: ReactNode;
  dataId?: string;
};

const StyledSublabel = styled.span`
  font-size: ${(props) => props.theme.typography.fontSizes.label};
  color: ${(props) => props.theme.colors.gray900};
`;

const Sublabel = ({ children, dataId, ...props }: SublabelProps) => (
  <StyledSublabel data-cy={dataId} {...props}>
    {children}
  </StyledSublabel>
);

export default Sublabel;
