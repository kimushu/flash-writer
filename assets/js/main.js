(function() {
  "use strict";
  var BrowserWindow, app, path, ref, win;

  ref = require("electron"), app = ref.app, BrowserWindow = ref.BrowserWindow;

  path = require("path");

  win = null;

  app.on("window-all-closed", (function(_this) {
    return function() {
      if (process.platform !== "darwin") {
        app.quit();
      }
    };
  })(this));

  app.on("ready", (function(_this) {
    return function() {
      win = new BrowserWindow({
        width: 800,
        height: 600
      });
      win.webContents.openDevTools();
      win.loadURL("file://" + (path.join(__dirname, "..")) + "/view/index.html");
      win.on("closed", function() {
        win = null;
      });
    };
  })(this));

}).call(this);
