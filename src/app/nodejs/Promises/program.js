export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a Promise?");
    addLog("");

    addLog("Answer:");
    addLog(
        "A Promise is an object that represents the eventual completion or failure of an asynchronous operation."
    );

    addLog("");

    addLog("Promise States:");
    addLog("Pending");
    addLog("Fulfilled");
    addLog("Rejected");

    addLog("");

    addLog("Example:");

    addLog('const promise = new Promise((resolve, reject) => {');
    addLog('    resolve("Task completed");');
    addLog("});");

    addLog("");

    addLog("promise.then((result) => {");
    addLog("    console.log(result);");
    addLog("});");

    addLog("");

    addLog("Important:");
    addLog("Promise → Represents the future result of an asynchronous operation.");

    addLog("");

    addLog("Program completed.");
}