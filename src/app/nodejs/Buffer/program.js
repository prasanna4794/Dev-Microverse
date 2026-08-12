export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Buffer?");
    addLog("");

    addLog("Answer:");
    addLog(
        "A Buffer is a Node.js object used to work with binary data directly in memory."
    );

    addLog("");

    addLog("Example:");

    addLog('const buffer = Buffer.from("Hello");');

    addLog("");

    addLog("console.log(buffer);");
    addLog('console.log(buffer.toString());');

    addLog("");

    addLog("Important Methods:");
    addLog("Buffer.from() → Creates a Buffer from data.");
    addLog("Buffer.alloc() → Creates an empty Buffer.");
    addLog("toString() → Converts Buffer data to text.");

    addLog("");

    addLog("Important:");
    addLog("Buffer → Used to handle binary data in Node.js.");

    addLog("");

    addLog("Program completed.");
}