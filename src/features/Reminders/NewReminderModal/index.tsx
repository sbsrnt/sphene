import React, { ComponentType, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Modal } from 'components';

import { getActiveReminderSelector } from '../selectors';
import ModalTitle from './ModalTitle/ModalTitle';
import FirstStep from './Steps/FirstStep';
import SecondStep from './Steps/SecondStep';
import supportedReminderTypes from './supported-reminder-types';

type NewReminderModalProps = {
  toggleModal: () => void;
  isOpen: boolean;
};

const NewReminderModal = ({ toggleModal, isOpen }: NewReminderModalProps) => {
  const [activeStep, setActiveStep] = useState<1 | 2>(1);
  const [{ reminderType, reminderValue, ReminderComponent }, setActiveReminder] = useState<{
    reminderType: string;
    reminderValue: number;
    ReminderComponent: ComponentType<any>;
  }>(supportedReminderTypes[0]);

  const activeReminder = useSelector(getActiveReminderSelector);

  useEffect(() => {
    setActiveStep(isOpen && activeReminder ? 2 : 1);
  }, [activeReminder, isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      toggleModal={toggleModal}
      title={<ModalTitle activeStep={activeStep} reminderType={reminderType} />}
      dataId="modal-createNewReminder"
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
