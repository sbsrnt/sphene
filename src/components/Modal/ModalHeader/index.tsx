import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

type ModalHeader = {
  children: ReactNode;
};

const Header = styled.h3`
  color: ${(props) => props.theme.bg.secondary};
  margin-bottom: 1em;
`;

const ModalHeader: FC<ModalHeader> = ({ children }) => <Header>{children}</Header>;

export default ModalHeader;
