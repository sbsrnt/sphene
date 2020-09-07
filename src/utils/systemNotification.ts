type Options = {
  title: string;
} & NotificationOptions;

const systemNotification = ({ title, body, ...options }: Options) => {
  const s = new Notification(title, {
    body,
    requireInteraction: true,
    timestamp: +new Date(),
    ...options,
  });
  // s.onclick = () => ipcRenderer.send('notify', (e: any) => console.log(e));
  s.onclick = () => window.shellOpenExternal('https://google.com');
};

export default systemNotification;
