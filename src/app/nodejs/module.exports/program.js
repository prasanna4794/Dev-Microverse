export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is module.exports in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "module.exports is used to export functions, objects, or values from one Node.js file so they can be used in another file."
    );

    addLog("");

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

    addLog("console.log(add(10, 20));");

    addLog("");

    addLog("Output:");
    addLog("30");

    addLog("");

    addLog("Important:");
    addLog("module.exports → Export");
    addLog("require() → Import");

    addLog("");

    addLog("Program completed.");
}