export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are Built-in Modules in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Built-in modules are modules that come already installed with Node.js."
    );

    addLog("");

    addLog("Important Built-in Modules:");

    addLog("fs     → File handling");
    addLog("path   → File and folder paths");
    addLog("http   → HTTP server");
    addLog("os     → Operating system information");
    addLog("events → Event handling");
    addLog("url    → URL handling");

    addLog("");

    addLog("Example:");

    addLog('const fs = require("fs");');

    addLog("");

    addLog("fs.writeFileSync(");
    addLog('    "hello.txt",');
    addLog('    "Hello Node.js"');
    addLog(");");

    addLog("");

    addLog("Output:");
    addLog("File created");

    addLog("");

    addLog("Important:");
    addLog("Built-in modules do not need npm installation.");

    addLog("");

    addLog("Program completed.");
}