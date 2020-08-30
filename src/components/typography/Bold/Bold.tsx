import React, { ReactNode } from 'react';
import styled from 'styled-components';

type BoldProps = {
  children?: ReactNode;
  onClick?: any;
};

const StyledBold = styled.strong`
  font-weight: bold;
  font-size: 16px;
`;

const Bold = ({ children, onClick, ...props }: BoldProps) => {
  return (
    <StyledBold onClick={onClick} {...props}>
      {children}
    </StyledBold>
  );
};

export default Bold;
