import React, { ComponentType, useState } from 'react';

import { Modal } from 'components';

import ModalTitle from './ModalTitle/ModalTitle';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import supportedReminderTypes from './supported-reminder-types';

type NewReminderModalProps = {
  toggleModal: () => void;
  isOpen: boolean;
};

const NewReminderModal = ({ toggleModal, isOpen }: NewReminderModalProps) => {
  const [activeStep, setActiveStep] = useState<1 | 2>(2);
  const [{ reminderType, reminderValue, ReminderComponent }, setActiveReminder] = useState<{
    reminderType: string;
    reminderValue: number;
    ReminderComponent: ComponentType<any>;
  }>(supportedReminderTypes[0]);

  return (
    <Modal
      isOpen={isOpen}
      toggleModal={toggleModal}
      title={<ModalTitle activeStep={activeStep} reminderType={reminderType} />}
    >
      {activeStep === 1 && (
        <FirstStep
          setActiveStep={setActiveStep}
          setActiveReminder={setActiveReminder}
          toggleModal={toggleModal}
        />
      )}
      {activeStep === 2 && (
        <SecondStep
          toggleModal={toggleModal}
          setActiveStep={setActiveStep}
          reminderValue={reminderValue}
        >
          <ReminderComponent />
        </SecondStep>
      )}
    </Modal>
  );
};

export default NewReminderModal;
