export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the fs module in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "The fs module is a built-in Node.js module used to work with files and folders."
    );

    addLog("");

    addLog("Import fs:");

    addLog('const fs = require("fs");');

    addLog("");

    addLog("Create / Write File:");

    addLog("fs.writeFileSync(");
    addLog('    "hello.txt",');
    addLog('    "Hello Node.js"');
    addLog(");");

    addLog("");

    addLog("Read File:");

    addLog('const data = fs.readFileSync("hello.txt", "utf8");');

    addLog("");

    addLog("Delete File:");

    addLog('fs.unlinkSync("hello.txt");');

    addLog("");

    addLog("Important fs Methods:");

    addLog("writeFileSync() → Write file");
    addLog("readFileSync()  → Read file");
    addLog("unlinkSync()    → Delete file");
    addLog("existsSync()    → Check file");

    addLog("");

    addLog("Program completed.");
}