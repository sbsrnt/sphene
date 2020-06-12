const { app, BrowserWindow } = require('electron');
const { installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const isDev = require('electron-is-dev');
const path = require('path');
const contextMenu = require('electron-context-menu');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (isDev) {
    // Provide Inspect Element option on right click
    contextMenu();

    // Load view
    mainWindow.loadURL('http://localhost:3000');

    // Hot Reloading
    // 'node_modules/.bin/electronPath'
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
      forceHardReset: true,
      hardResetMethod: 'exit',
    });

    // Devtools
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

    mainWindow.webContents.openDevTools();
  } else {
    // 'build/index.html'
    mainWindow.loadURL(`file://${__dirname}/../index.html`);
  }
}

app.whenReady().then(() => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
