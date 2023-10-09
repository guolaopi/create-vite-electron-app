import { app, BrowserWindow } from "electron";
import os from "os";
import path from "path";

const remote = require("@electron/remote/main");
remote.initialize(); // 初始化remote模块

function createWindow() {
    const preloadPath =
        (os == "win32" ? "file://" : "") +
        path.join(app.getAppPath(), "app/preload.js");

    const win = new BrowserWindow({
        show: false,
        width: 1024,
        height: 768,
        icon: "./app.ico",
        webPreferences: {
            nodeIntegration: true, //允许渲染进程使用Nodejs
            enableRemoteModule: true,
            contextIsolation: true,
            preload: preloadPath,
        },
    });

    remote.enable(win.webContents); // 启用remote模块

    win.setMenuBarVisibility(false); // 隐藏菜单栏
    if (process.env.NODE_ENV == "development") {
        const devUrl = "http://localhost:3333";
        win.loadURL(devUrl);
        win.webContents.openDevTools();
    } else {
        win.loadFile("./app/web/index.html");
    }

    win.once("ready-to-show", () => {
        win.show();
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
