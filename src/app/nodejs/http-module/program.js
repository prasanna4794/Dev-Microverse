export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the http module in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "The http module is a built-in Node.js module used to create an HTTP server and handle requests and responses."
    );

    addLog("");

    addLog("Import http:");

    addLog('const http = require("http");');

    addLog("");

    addLog("Create Server:");

    addLog("const server = http.createServer((req, res) => {");
    addLog('    res.end("Hello Node.js");');
    addLog("});");

    addLog("");

    addLog("Start Server:");

    addLog("server.listen(3000);");

    addLog("");

    addLog("Open in Browser:");

    addLog("http://localhost:3000");

    addLog("");

    addLog("Output:");
    addLog("Hello Node.js");

    addLog("");

    addLog("Important:");
    addLog("req → Request");
    addLog("res → Response");

    addLog("");

    addLog("Program completed.");
}