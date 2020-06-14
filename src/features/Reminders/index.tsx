import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Page } from 'components';

const Actions = () => (
  <>
    <Button as={Link} to="settings" variant="success">
      New Reminder
    </Button>
  </>
);

const Reminders = () => {
  const click = () => {
    const s = new Notification('XD', {
      body: 'A TY CO, DALEJ 3K RIO',
    });
    console.log(s);
    // s.onclick = () => ipcRenderer.send('notify', (e: any) => console.log(e));
    s.onclick = () => window.shellOpenExternal('https://google.com');
  };

  return (
    <Page title="Reminders" actions={<Actions />}>
      <div onClick={click}>clickme</div>
    </Page>
  );
};

export default Reminders;
