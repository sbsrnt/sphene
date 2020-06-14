import React, { useState } from 'react';

import { Button, Modal, Page } from 'components';

const Actions = ({ toggleModal }: { toggleModal: () => void }) => (
  <>
    <Button variant="success" onClick={toggleModal}>
      New Reminder
    </Button>
  </>
);

const Reminders = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  const handleSubmit = () => console.log('submitted');

  const click = () => {
    const s = new Notification('XD', {
      body: 'A TY CO, DALEJ 3K RIO',
    });
    console.log(s);
    // s.onclick = () => ipcRenderer.send('notify', (e: any) => console.log(e));
    s.onclick = () => window.shellOpenExternal('https://google.com');
  };

  return (
    <Page title="Reminders" actions={<Actions toggleModal={toggleModal} />}>
      <div onClick={click}>clickme</div>
      <Modal isOpen={isOpen} toggleModal={toggleModal} title="New Reminder" onSubmit={handleSubmit}>
        XDDDDDDDDD
      </Modal>
    </Page>
  );
};

export default Reminders;
