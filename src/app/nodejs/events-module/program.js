export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is the events module in Node.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "The events module is a built-in Node.js module used to create, handle, and respond to events."
    );

    addLog("");

    addLog("Import EventEmitter:");

    addLog(
        'const EventEmitter = require("events");'
    );

    addLog("");

    addLog("Create EventEmitter:");

    addLog(
        "const event = new EventEmitter();"
    );

    addLog("");

    addLog("Listen to an event:");

    addLog('event.on("message", () => {');
    addLog(
        '    console.log("Message event occurred");'
    );
    addLog("});");

    addLog("");

    addLog("Trigger the event:");

    addLog('event.emit("message");');

    addLog("");

    addLog("Output:");
    addLog("Message event occurred");

    addLog("");

    addLog("Important:");
    addLog("on() → Listen to an event");
    addLog("emit() → Trigger an event");

    addLog("");

    addLog("Program completed.");
}