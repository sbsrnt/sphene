import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import startCase from 'lodash/startCase';
import styled from 'styled-components';

import { Button, Checkbox, Modal } from 'components';

import supportedReminderTypes from './supported-reminder-types';

import 'react-calendar/dist/Calendar.css';

const StyledActions = styled.div`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

type NewReminderModalProps = {
  toggleModal: () => void;
  isOpen: boolean;
};

const NewReminderModal: FC<NewReminderModalProps> = ({ toggleModal, isOpen }) => {
  const [isCreateNewReminderToggled, setIsCreateNewReminderToggled] = useState(false);
  const [{ reminderType, ReminderComponent }, setActiveReminder] = useState(
    supportedReminderTypes[0]
  );
  const { handleSubmit, register, errors, reset } = useForm();

  const handleCreateNewReminderToggle = () => setIsCreateNewReminderToggled((toggled) => !toggled);

  const onSubmit = () => {
    isCreateNewReminderToggled && reset();
    !isCreateNewReminderToggled && toggleModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      toggleModal={toggleModal}
      title={`New ${startCase(reminderType)} Reminder`}
    >
      <Modal.Body>
        <Form>
          <ReminderComponent register={register} errors={errors} />
        </Form>
      </Modal.Body>
      <Modal.Actions>
        <StyledActions>
          <div>
            <Checkbox
              id="reset-reminder"
              checked={isCreateNewReminderToggled}
              onChange={handleCreateNewReminderToggle}
            />
            <label htmlFor="reset-reminder">Create new reminder?</label>
          </div>
          <Button onClick={toggleModal} variant="bordered">
            Cancel
          </Button>
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </StyledActions>
      </Modal.Actions>
    </Modal>
  );
};

export default NewReminderModal;
