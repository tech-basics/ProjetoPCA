const { app, BrowserWindow } = require('electron');
//const {autoUpdater} = require("electron-updater");
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Cria uma janela.
  const mainWindow = new BrowserWindow({
    width: 1180,
    height: 662,
  });

  // carrega o index.html do aplicativo.
  mainWindow.loadFile(path.join(__dirname, 'loader.html'));
  mainWindow.setMenu(null); // Remove o menu
  

  /*
  Abre o DevTools ao iniciar:
  mainWindow.webContents.openDevTools();
  */
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});




// when the update is ready, notify the BrowserWindow
/*
autoUpdater.on('update-downloaded', (info) => {
    win.webContents.send('updateReady')
});
app.on('ready', function() {
  createDefaultWindow();
  autoUpdater.checkForUpdates();
});
ipcMain.on("quitAndInstall", (event, arg) => {
    autoUpdater.quitAndInstall();
})

*/