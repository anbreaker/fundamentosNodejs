// npm init -y
// npm i electron

const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createMainWindow);

function createMainWindow(){
    mainWindow = new BrowserWindow ({
        width: 800,
        height: 600,
    })

    mainWindow.loadFile('index.html')
}