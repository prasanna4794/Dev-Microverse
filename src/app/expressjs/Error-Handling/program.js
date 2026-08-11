export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Error Handling Middleware in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Error handling middleware is used to handle errors that occur in an Express.js application."
    );

    addLog("");

    addLog("Example:");

    addLog('app.get("/", (req, res, next) => {');
    addLog('    const error = new Error("Something went wrong");');
    addLog("    next(error);");
    addLog("});");

    addLog("");

    addLog("app.use((err, req, res, next) => {");
    addLog('    res.status(500).send("Server Error");');
    addLog("});");

    addLog("");

    addLog("Error:");
    addLog("Something went wrong");

    addLog("");

    addLog("Status Code:");
    addLog("500");

    addLog("");

    addLog("Output:");
    addLog("Server Error");

    addLog("");

    addLog("Program completed.");
}