import React, { FC, ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { backdrop, modal } from './animations';
import Backdrop from './Backdrop';
import ModalActions from './ModalActions';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';

type Modal = {
  isOpen: boolean;
  toggleModal: () => void;
  title: string;
  children: ReactNode;
  onSubmit: () => void;
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
  max-height: 600px;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.bg.secondary};
  max-width: 400px;
  position: relative;
  z-index: 3;
  min-width: 400px;
`;

const Modal: FC<Modal> = ({ isOpen = false, toggleModal, title, children, onSubmit }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <ModalWrapper variants={backdrop} animate="visible" initial="hidden" exit="hidden">
          <Backdrop onClick={toggleModal} />
          <StyledModal variants={modal}>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalActions toggleModal={toggleModal} onSubmit={onSubmit} />
          </StyledModal>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default Modal;
