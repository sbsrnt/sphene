import React, { ReactNode } from 'react';
import styled from 'styled-components';

type BoldProps = {
  children?: ReactNode;
};

const StyledBold = styled.strong`
  font-weight: bold;
  font-size: 16px;
`;

const Bold = ({ children, ...props }: BoldProps) => {
  return <StyledBold {...props}>{children}</StyledBold>;
};

export default Bold;
