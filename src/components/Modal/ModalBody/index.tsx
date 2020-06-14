import React, { FC, ReactNode } from 'react';

type ModalBody = {
  children: ReactNode;
};

const ModalBody: FC<ModalBody> = ({ children }) => {
  return <div>{children}</div>;
};

export default ModalBody;
