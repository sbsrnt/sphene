import React, { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { backdrop, modal } from './animations';
import Backdrop from './Backdrop/Backdrop';
import ModalActions, { ModalActionsProps } from './ModalActions/ModalActions';
import ModalBody, { ModalBodyProps } from './ModalBody/ModalBody';
import ModalHeader from './ModalHeader/ModalHeader';

type Modal = {
  isOpen: boolean;
  toggleModal: () => void;
  title?: ReactNode | string;
  children: ReactNode;
  Body?: ModalBodyProps;
  Actions?: ModalActionsProps;
  dataId?: string;
};

const ModalWrapper = styled(motion.div)`
  opacity: 1;
  position: absolute;
  top: 30px;
  left: 0;
  height: calc(100% - 30px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled(motion.div)`
  padding: 1em;
  max-height: 800px;
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.gray300};
  max-width: 400px;
  position: relative;
  z-index: 3;
  min-width: 400px;
  min-height: 400px;
  transform: none;
  display: grid;
  grid-template-rows: 40px 1fr 40px;
`;

const Modal = ({ isOpen = false, toggleModal, title, children, dataId }: Modal) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <ModalWrapper
          variants={backdrop}
          animate="visible"
          initial="hidden"
          exit="hidden"
          data-cy={dataId}
        >
          <Backdrop onClick={toggleModal} />
          <StyledModal variants={modal}>
            <ModalHeader>{title}</ModalHeader>
            {children}
          </StyledModal>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};

Modal.Body = ModalBody;
Modal.Actions = ModalActions;

export default Modal;
