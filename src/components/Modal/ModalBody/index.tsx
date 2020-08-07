import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export type ModalBody = {
  children: ReactNode;
};

const Body = styled.div`
  margin-bottom: 1em;
`;

const ModalBody: FC<ModalBody> = ({ children }) => {
  return <Body>{children}</Body>;
};

export default ModalBody;
