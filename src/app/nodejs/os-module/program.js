export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the os module in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "The os module is a built-in Node.js module used to get information about the operating system and computer."
    );

    addLog("");

    addLog("Import os:");

    addLog('const os = require("os");');

    addLog("");

    addLog("Platform:");

    addLog("os.platform();");

    addLog("");

    addLog("Architecture:");

    addLog("os.arch();");

    addLog("");

    addLog("CPU Count:");

    addLog("os.cpus().length;");

    addLog("");

    addLog("Total Memory:");

    addLog("os.totalmem();");

    addLog("");

    addLog("Free Memory:");

    addLog("os.freemem();");

    addLog("");

    addLog("Important:");
    addLog("os → Operating System information");

    addLog("");

    addLog("Program completed.");
}