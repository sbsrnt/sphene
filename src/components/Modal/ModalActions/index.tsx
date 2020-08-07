import React, { FC, ReactNode } from 'react';

export type ModalActions = {
  children: ReactNode;
};

const ModalActions: FC<ModalActions> = ({ children }) => <div>{children}</div>;

export default ModalActions;
