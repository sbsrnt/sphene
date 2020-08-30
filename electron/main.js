const { app, BrowserWindow } = require('electron');
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS,
} = require('electron-devtools-installer');
const isDev = require('electron-is-dev');
const path = require('path');
const contextMenu = require('electron-context-menu');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1800,
    height: 900,
    frame: false,
    backgroundColor: '#212121',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (isDev) {
    // Provide Inspect Element option on right click
    contextMenu();

    // Devtools
    [REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS].forEach((extension) =>
      installExtension(extension)
        .then((name) => console.log(`Added Extension: ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
    );

    // Load view
    mainWindow.loadURL('http://localhost:3000');

    // Hot Reloading
    // 'node_modules/.bin/electronPath'
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
      forceHardReset: true,
      hardResetMethod: 'exit',
    });

    mainWindow.webContents.openDevTools();
  } else {
    // 'build/index.html'
    mainWindow.loadURL(`file://${__dirname}/../index.html`);
  }
}

app.whenReady().then(createWindow);

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
