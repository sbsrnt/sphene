import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type ModalBodyProps = {
  children: ReactNode;
};

const Body = styled.div`
  margin-bottom: 1em;
`;

const ModalBody = ({ children }: ModalBodyProps) => {
  return <Body>{children}</Body>;
};

export default ModalBody;
