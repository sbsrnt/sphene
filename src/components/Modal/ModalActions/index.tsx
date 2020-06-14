import React, { FC } from 'react';
import styled from 'styled-components';

import { Button } from 'components';

type ModalActions = {
  toggleModal: () => void;
  onSubmit: () => void;
};

const Actions = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 0.5em;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const ModalActions: FC<ModalActions> = ({ toggleModal, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    toggleModal();
  };
  return (
    <Actions>
      <Button onClick={toggleModal} variant="bordered">
        Close
      </Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </Actions>
  );
};

export default ModalActions;
