import React, { ReactNode } from 'react';
import styled from 'styled-components';

type BodyProps = {
  children?: ReactNode;
};

const StyledBody = styled.p`
  font-size: 16px;
`;

const Body = ({ children, ...props }: BodyProps) => <StyledBody {...props}>{children}</StyledBody>;

export default Body;
