const { spawn } = require("child_process");

function processRun(target) {
    let command = "npm";
    if (process.platform === "win32") {
        command = "npm.cmd"; // for windows
    }
    const myProcess = spawn(command, ["run", target]); // npm run xxx

    myProcess.stdout.on("data", (data) => {
        process.stdout.write(data); // print log
    });
}

// command to execute
const scripts = ["vite:dev", "electron:dev"];

scripts.forEach((cmd) => processRun(cmd));
