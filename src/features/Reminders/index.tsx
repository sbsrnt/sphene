import React, { useState } from 'react';

import { Button, Page } from 'components';

import NewReminderModal from './NewReminderModal';
import RemindersList from './RemindersList/RemindersList';

const Actions = ({ toggleModal }: { toggleModal: () => void }) => (
  <>
    <Button variant="success" onClick={toggleModal}>
      New Reminder
    </Button>
  </>
);

const Reminders = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((isOpen) => !isOpen);

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
      <RemindersList />
      <NewReminderModal toggleModal={toggleModal} isOpen={isOpen} />
    </Page>
  );
};

export default Reminders;
