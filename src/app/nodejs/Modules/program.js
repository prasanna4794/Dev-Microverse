export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are Modules in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "A module is a separate file or piece of code that contains reusable functionality in a Node.js application."
    );

    addLog("");

    addLog("Types of Modules:");

    addLog("1. Built-in Modules");
    addLog("Example: fs, path, http");

    addLog("");

    addLog("2. Local Modules");
    addLog("Example: ./math");

    addLog("");

    addLog("3. Third-Party Modules");
    addLog("Example: express");

    addLog("");

    addLog("Local Module Example:");

    addLog("math.js:");
    addLog("function add(a, b) {");
    addLog("    return a + b;");
    addLog("}");
    addLog("");
    addLog("module.exports = add;");

    addLog("");

    addLog("server.js:");
    addLog('const add = require("./math");');

    addLog("");

    addLog("Output:");
    addLog("30");

    addLog("");

    addLog("Program completed.");
}