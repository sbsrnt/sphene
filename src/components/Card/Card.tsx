import React, { ReactNode } from 'react';
import styled from 'styled-components';

type CardProps = {
  children: ReactNode;
};

const StyledCard = styled.div`
  padding: 1em;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.gray500};
  box-shadow: 0 3px 5px ${(props) => props.theme.colors.gray500}50;
`;

const Card = ({ children, ...props }: CardProps) => <StyledCard {...props}>{children}</StyledCard>;

export default Card;
