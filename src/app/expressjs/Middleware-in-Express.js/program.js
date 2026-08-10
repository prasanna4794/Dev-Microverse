export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Middleware in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Middleware is a function that executes between the request and the response."
    );

    addLog("");

    addLog("Example:");
    addLog("app.use((req, res, next) => {");
    addLog('    console.log("Middleware executed");');
    addLog("    next();");
    addLog("});");

    addLog("");

    addLog("Output:");
    addLog("Middleware executed");

    addLog("");
    addLog("Program completed.");
}