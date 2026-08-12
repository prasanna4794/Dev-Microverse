export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the Event Loop in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "The Event Loop is a mechanism in Node.js that allows it to handle asynchronous operations without blocking the main thread."
    );

    addLog("");

    addLog("Example:");

    addLog('console.log("Start");');

    addLog("");

    addLog("setTimeout(() => {");
    addLog('    console.log("Timeout completed");');
    addLog("}, 0);");

    addLog("");

    addLog('console.log("End");');

    addLog("");

    addLog("Output:");
    addLog("Start");
    addLog("End");
    addLog("Timeout completed");

    addLog("");

    addLog("Important:");
    addLog(
        "Event Loop → Manages asynchronous operations and helps Node.js perform non-blocking execution."
    );

    addLog("");

    addLog("Program completed.");
}