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

module.exports = {
    runMultiCmds: (cmds) => {
        // command to execute
        cmds.forEach((cmd) => processRun(cmd));
    },
};

// command to execute
const scripts = ["dev:vite", "dev:electron"];
