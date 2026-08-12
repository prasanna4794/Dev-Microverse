export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is a callback?");
    addLog("");

    addLog("Answer:");
    addLog(
        "A callback is a function passed as an argument to another function and executed later."
    );

    addLog("");

    addLog("Example:");

    addLog("function greet(name, callback) {");
    addLog('    console.log("Hello " + name);');
    addLog("    callback();");
    addLog("}");

    addLog("");

    addLog("function done() {");
    addLog('    console.log("Task completed");');
    addLog("}");

    addLog("");

    addLog('greet("Prasanna", done);');

    addLog("");

    addLog("Important:");
    addLog("Callback → A function passed to another function for later execution.");

    addLog("");

    addLog("Program completed.");
}