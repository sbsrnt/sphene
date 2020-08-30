import React, { ReactNode } from 'react';
import styled from 'styled-components';

type BodyProps = {
  children?: ReactNode;
};

const StyledBody = styled.p`
  font-size: ${(props) => props.theme.typography.fontSizes.default};
`;

const Body = ({ children, ...props }: BodyProps) => <StyledBody {...props}>{children}</StyledBody>;

export default Body;
