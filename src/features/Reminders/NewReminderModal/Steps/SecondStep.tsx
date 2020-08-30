import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Button, Checkbox, Modal } from 'components';
import { createReminderRequest } from 'features/Reminders/actions';
import { getRemindersCreatingStatusSelector } from 'features/Reminders/selectors';

const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin-left: 0.5em;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const StyledLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;

  label {
    margin-left: 0.5em;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SecondStep = ({ setActiveStep, toggleModal, reminderValue, children }: any) => {
  const [isCreateNewReminderToggled, setIsCreateNewReminderToggled] = useState(false);
  const { control, handleSubmit, register, errors, reset } = useForm();
  const dispatch = useDispatch();
  const isCreating = useSelector(getRemindersCreatingStatusSelector);

  const handleCreateNewReminderToggle = () => {
    setIsCreateNewReminderToggled((toggled) => !toggled);
  };
  const handleGoBackClick = () => setActiveStep(1);

  const onSubmit = ({ remindAt, remindOn, ...data }: any) => {
    const formattedRemindAt = new Date(`${remindAt}T${remindOn}:00`);

    dispatch<any>(
      createReminderRequest({ type: reminderValue, remindAt: formattedRemindAt, ...data })
    ).then(({ error }: any) => {
      if (error) return toast.error(error.data.message);

      toast.success('Successfully created reminder!');
      isCreateNewReminderToggled && reset();
      !isCreateNewReminderToggled && toggleModal();
    });
  };

  return (
    <>
      <Modal.Body>
        <Form>
          {React.cloneElement(children, { control, register, errors, disabled: isCreating })}
        </Form>
        <StyledLabelWrapper>
          <Checkbox
            id="reset-reminder"
            checked={isCreateNewReminderToggled}
            onChange={handleCreateNewReminderToggle}
          />
          <label htmlFor="reset-reminder">Create new reminder?</label>
        </StyledLabelWrapper>
      </Modal.Body>
      <Modal.Actions>
        <StyledActions>
          <Button onClick={toggleModal} variant="none" disabled={isCreating}>
            Cancel
          </Button>
          <div>
            <Button onClick={handleGoBackClick} variant="bordered" disabled={isCreating}>
              Go Back
            </Button>
            <Button onClick={handleSubmit(onSubmit)} isLoading={isCreating}>
              Submit
            </Button>
          </div>
        </StyledActions>
      </Modal.Actions>
    </>
  );
};
export default SecondStep;
