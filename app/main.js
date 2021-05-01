const { app, BrowserWindow } = require('electron');
const path = require('path');

app.on('ready', () => {
  const window = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  window.loadURL('file://' + path.join(__dirname, 'index.html'));
});
