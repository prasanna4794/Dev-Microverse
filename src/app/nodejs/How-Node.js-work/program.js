export default function runProgram(addLog) {

    addLog("Question:");
    addLog("How does Node.js work?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Node.js uses the V8 JavaScript engine and an Event Loop to execute JavaScript code and handle multiple requests efficiently."
    );

    addLog("");

    addLog("Example:");

    addLog('console.log("Start");');

    addLog("");

    addLog("setTimeout(() => {");
    addLog('    console.log("Inside Timeout");');
    addLog("}, 2000);");

    addLog("");

    addLog('console.log("End");');

    addLog("");

    addLog("Output:");
    addLog("Start");
    addLog("End");
    addLog("Inside Timeout");

    addLog("");

    addLog("Important:");
    addLog("Node.js uses an Event Loop.");
    addLog("Node.js supports non-blocking I/O.");

    addLog("");

    addLog("Program completed.");
}