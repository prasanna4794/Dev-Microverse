export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is app.listen() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "app.listen() is used to start the Express.js server and listen for incoming requests on a specific port."
    );

    addLog("");

    addLog("Example:");

    addLog("const express = require('express');");
    addLog("");

    addLog("const app = express();");
    addLog("");

    addLog('app.get("/", (req, res) => {');
    addLog('    res.send("Hello Express.js");');
    addLog("});");

    addLog("");

    addLog("app.listen(3000, () => {");
    addLog('    console.log("Server running on port 3000");');
    addLog("});");

    addLog("");

    addLog("URL:");
    addLog("http://localhost:3000");

    addLog("");

    addLog("Output:");
    addLog("Hello Express.js");

    addLog("");

    addLog("Program completed.");
}