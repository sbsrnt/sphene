import React, { ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import { backdrop, modal } from './animations';
import Backdrop from './Backdrop';
import ModalActions, { ModalActions as ModalActionsType } from './ModalActions';
import ModalBody, { ModalBody as ModalBodyType } from './ModalBody';
import ModalHeader from './ModalHeader';

type Modal = {
  isOpen: boolean;
  toggleModal: () => void;
  title: string;
  children: ReactNode;
  Body?: ModalBodyType;
  Actions?: ModalActionsType;
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

const Modal = ({ isOpen = false, toggleModal, title, children }: Modal) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <ModalWrapper variants={backdrop} animate="visible" initial="hidden" exit="hidden">
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
