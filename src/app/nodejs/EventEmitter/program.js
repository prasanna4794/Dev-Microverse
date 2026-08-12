export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is EventEmitter?");
    addLog("");

    addLog("Answer:");
    addLog(
        "EventEmitter is a Node.js class used to create, listen for, and emit custom events."
    );

    addLog("");

    addLog("Important Methods:");
    addLog("on() → Listen for an event.");
    addLog("emit() → Trigger an event.");
    addLog("once() → Listen for an event only once.");

    addLog("");

    addLog("Example:");

    addLog('const EventEmitter = require("events");');
    addLog("const emitter = new EventEmitter();");

    addLog("");

    addLog('emitter.on("login", () => {');
    addLog('    console.log("User logged in");');
    addLog("});");

    addLog("");

    addLog('emitter.emit("login");');

    addLog("");

    addLog("Important:");
    addLog("EventEmitter → Create, listen, and trigger events.");

    addLog("");

    addLog("Program completed.");
}