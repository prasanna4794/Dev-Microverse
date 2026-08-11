export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is req.body in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "req.body is used to access data sent by the client in the request body."
    );

    addLog("");

    addLog("Request:");
    addLog('{ "name": "Prasanna", "age": 25 }');

    addLog("");

    addLog("req.body:");
    addLog('{ name: "Prasanna", age: 25 }');

    addLog("");

    addLog("Output:");
    addLog("User received");

    addLog("");

    addLog("Program completed.");
}