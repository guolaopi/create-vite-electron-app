import { app, BrowserWindow } from "electron";
import os from "os";
import path from "path";

function createWindow() {
    const preloadPath =
        (os == "win32" ? "file://" : "") +
        path.join(app.getAppPath(), "app/preload.js");

    const win = new BrowserWindow({
        show: false,
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true, //允许渲染进程使用Nodejs
            preload: preloadPath,
        },
    });
    win.setMenuBarVisibility(false); // 隐藏菜单栏

    if (process.env.NODE_ENV == "development") {
        const devUrl = "http://localhost:3333";
        win.loadURL(devUrl);
    } else {
        win.loadFile("./app/dist/index.html");
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
