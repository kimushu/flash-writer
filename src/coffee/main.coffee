"use strict"
{app,BrowserWindow} = require("electron")
path = require("path")
# require("crash-reporter").start()
win = null

app.on "window-all-closed", =>
  if process.platform != "darwin"
    app.quit()
  return

app.on "ready", =>
  win = new BrowserWindow(
    width: 800
    height: 600
  )
  win.webContents.openDevTools()
  win.loadURL "file://#{path.join(__dirname, "..")}/view/index.html"

  win.on "closed", =>
    win = null
    return
  return

