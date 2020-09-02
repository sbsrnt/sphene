import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Page } from 'components';

import { setActiveReminder } from './actions';
import NewReminderModal from './NewReminderModal';
import RemindersList from './RemindersList/RemindersList';

const Actions = ({ toggleModal }: { toggleModal: () => void }) => (
  <>
    <Button variant="success" onClick={toggleModal} dataId="button-createNewReminder">
      New Reminder
    </Button>
  </>
);

const Reminders = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    isOpen && dispatch(setActiveReminder(null));
    setIsOpen((isOpen) => !isOpen);
  };

  // const click = () => {
  //   const s = new Notification('XD', {
  //     body: 'TEST',
  //     requireInteraction: true,
  //   });
  //   console.log(s);
  //   // s.onclick = () => ipcRenderer.send('notify', (e: any) => console.log(e));
  //   s.onclick = () => window.shellOpenExternal('https://google.com');
  // };
  return (
    <Page title="Reminders" actions={<Actions toggleModal={toggleModal} />}>
      <RemindersList toggleModal={toggleModal} />
      <NewReminderModal toggleModal={toggleModal} isOpen={isOpen} />
    </Page>
  );
};

export default Reminders;
