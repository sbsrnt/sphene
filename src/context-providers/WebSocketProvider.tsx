// import React, { createContext } from 'react';
// import io from 'socket.io-client';
//
// export const WebSocketContext = createContext(null);
//
// export const WebSocketProvider = ({ children }: any) => {
//   let socket: any;
//   let ws: any;
//   if (!socket) {
//     socket = io('http://localhost:81', { transports: ['websocket'] });
//
//
//     socket.on('reminders', (msg: any) => {
//       const payload = JSON.parse(msg);
//       console.log(payload);
//     });
//     console.log(socket);
//
//     ws = {
//       socket,
//     };
//   }
//
//   return <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>;
// };
//
// export default WebSocketProvider;
export {};
