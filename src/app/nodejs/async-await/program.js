export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is async/await?");
    addLog("");

    addLog("Answer:");
    addLog(
        "async/await is a modern way to handle asynchronous Promise-based operations with simpler and more readable code."
    );

    addLog("");

    addLog("Example:");

    addLog("async function getData() {");
    addLog('    const result = await Promise.resolve("Data received");');
    addLog("    console.log(result);");
    addLog("}");

    addLog("");

    addLog("Important:");
    addLog("async → Makes a function asynchronous.");
    addLog("await → Waits for a Promise result inside an async function.");

    addLog("");

    addLog("Program completed.");
}