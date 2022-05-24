import { app, BrowserWindow } from "electron";

function createWindow() {
    const win = new BrowserWindow({
        show: false,
        width: 1024,
        height: 768,
        webPreferences: {
            contextIsolation: true,
        },
    });
    win.setMenuBarVisibility(false); // 隐藏菜单栏

    if (process.env.NODE_ENV == "development") {
        const devUrl = "http://localhost:3000";
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
