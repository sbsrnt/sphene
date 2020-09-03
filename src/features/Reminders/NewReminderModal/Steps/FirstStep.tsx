import React from 'react';
import styled from 'styled-components';

import { AnimatedList, Button, Modal } from 'components';

import supportedReminderTypes from '../supported-reminder-types';

const StyledReminderTypes = styled(AnimatedList)`
  display: flex;
  justify-content: space-evenly;
`;

const FirstStep = ({ setActiveStep, setActiveReminder, toggleModal }: any) => {
  const handleReminderTypeClick = (reminder: any) => {
    setActiveReminder(reminder);
    setActiveStep(2);
  };

  return (
    <>
      <Modal.Body>
        <StyledReminderTypes>
          {supportedReminderTypes.map((reminder) => (
            <AnimatedList.Item key={reminder.reminderType} animation="fromTop">
              <Button
                onClick={() => handleReminderTypeClick(reminder)}
                dataId={`button-${reminder.reminderType}`}
              >
                {reminder.reminderType}
              </Button>
            </AnimatedList.Item>
          ))}
        </StyledReminderTypes>
      </Modal.Body>
      <Modal.Actions>
        <Button onClick={toggleModal} variant="bordered" dataId="button-cancel">
          Cancel
        </Button>
      </Modal.Actions>
    </>
  );
};

export default FirstStep;
