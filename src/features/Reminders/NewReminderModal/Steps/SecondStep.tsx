import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { occurrenceParser } from 'utils/occurrenceParser';

import {
  Button,
  Card,
  Checkbox,
  Column,
  FormField,
  Input,
  Modal,
  Row,
  TimePicker,
} from 'components';
import {
  createReminderRequest,
  getUpcomingRemindersRequest,
  setActiveReminder,
  updateReminderRequest,
} from 'features/Reminders/actions';
import {
  getActiveReminderSelector,
  getFormActiveReminderSelector,
  getRemindersCreatingStatusSelector,
} from 'features/Reminders/selectors';

import Checklist from '../Checklist/Checklist';

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

  &:first-child {
    margin-bottom: 0.5em;
  }

  label {
    margin-left: 0.5em;
  }
`;

const StyledButtons = styled.div`
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SecondStep = ({ setActiveStep, toggleModal, reminderValue, children }: any) => {
  const dispatch = useDispatch();
  const defaultValues = useSelector(getFormActiveReminderSelector);
  const activeReminder = useSelector(getActiveReminderSelector);
  const isCreating = useSelector(getRemindersCreatingStatusSelector);
  const [hasChecklist, setHasChecklist] = useState(true);
  const [isCreateNewReminderToggled, setIsCreateNewReminderToggled] = useState(false);
  const { control, handleSubmit, register, errors, reset } = useForm({ defaultValues });

  const handleCreateNewReminderToggle = () => {
    setIsCreateNewReminderToggled((toggled) => !toggled);
  };

  const handleAddChecklistClick = () => setHasChecklist((hasChecklist) => !hasChecklist);

  const handleGoBackClick = () => setActiveStep(1);

  const handleCancelClick = () => {
    toggleModal();
  };

  const onSubmit = ({ remindAt, remindOn, occurrence, item_0, item_1, item_2, ...data }: any) => {
    const formattedRemindAt = new Date(`${remindAt}T${remindOn}:00`);
    const parsedOccurrence =
      typeof occurrence === 'string' ? occurrenceParser(occurrence)?.value : occurrence;

    const checklist = {
      item_0,
      item_1,
      item_2,
    };

    const preparedData = {
      type: reminderValue,
      remindAt: formattedRemindAt,
      occurrence: parsedOccurrence,
      ...(hasChecklist && { checklist }),
      ...data,
    };

    const followUp = ({ error }: any) => {
      if (error) return toast.error(error.data.message);

      toast.success(`Successfully ${activeReminder ? 'updated' : 'created'} reminder!`);

      if (isCreateNewReminderToggled) {
        dispatch(setActiveReminder(null));
        reset();
      }
      !isCreateNewReminderToggled && toggleModal();
    };

    if (activeReminder) {
      dispatch<any>(updateReminderRequest({ _id: activeReminder._id, ...preparedData })).then(
        followUp
      );
      dispatch(getUpcomingRemindersRequest());
    } else dispatch<any>(createReminderRequest(preparedData)).then(followUp);
  };

  return (
    <>
      <Modal.Body>
        <Form>
          {React.cloneElement(children, {
            control,
            register,
            errors,
            disabled: isCreating,
            defaultValues,
          })}
          <Row>
            <Column>
              <StyledLabelWrapper>
                <Checkbox
                  id="add-checklist"
                  checked={hasChecklist}
                  onChange={handleAddChecklistClick}
                  dataId="checkbox-addChecklist"
                />
                <label htmlFor="add-checklist">Add checklist?</label>
              </StyledLabelWrapper>
              {hasChecklist && (
                <Checklist register={register} errors={errors} disabled={isCreating} />
              )}
            </Column>
          </Row>
        </Form>
        <StyledLabelWrapper>
          <Checkbox
            id="reset-reminder"
            checked={isCreateNewReminderToggled}
            onChange={handleCreateNewReminderToggle}
            dataId="checkbox-createNewReminder"
          />
          <label htmlFor="reset-reminder">Create new reminder?</label>
        </StyledLabelWrapper>
      </Modal.Body>
      <Modal.Actions>
        <StyledActions>
          <Button
            onClick={handleCancelClick}
            variant="none"
            disabled={isCreating}
            dataId="button-cancel"
          >
            Cancel
          </Button>
          <StyledButtons>
            <Button
              onClick={handleGoBackClick}
              variant="bordered"
              disabled={isCreating}
              dataId="button-go-back"
            >
              Go Back
            </Button>
            <Button onClick={handleSubmit(onSubmit)} isLoading={isCreating} dataId="button-submit">
              Submit
            </Button>
          </StyledButtons>
        </StyledActions>
      </Modal.Actions>
    </>
  );
};
export default SecondStep;
