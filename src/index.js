const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const notifySet = document.getElementById('notifySet')


// Find and open the settings.html popup

notifySet.addEventListener('click', function (event) {
    const modalPath = path.join('file://', __dirname, 'settings.html')
    let win = new BrowserWindow({
        frame: false,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        },
        width: 400,
        height: 200
    })
    win.on('close', function() { win = null})
    win.loadURL(modalPath)
    win.show()
})