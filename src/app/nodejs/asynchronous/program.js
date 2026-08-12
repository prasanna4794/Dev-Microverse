export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is asynchronous programming?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Asynchronous programming allows Node.js to start a task and continue executing other code without waiting for that task to finish."
    );

    addLog("");

    addLog("Example:");

    addLog('console.log("Start");');

    addLog('setTimeout(() => {');
    addLog('    console.log("Async task completed");');
    addLog('}, 2000);');

    addLog('console.log("End");');

    addLog("");

    addLog("Output:");
    addLog("Start");
    addLog("End");
    addLog("Async task completed");

    addLog("");

    addLog("Important:");
    addLog("Asynchronous → Start a task and continue other work without waiting.");

    addLog("");

    addLog("Program completed.");
}