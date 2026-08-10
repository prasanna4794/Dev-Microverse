export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is app.use() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "app.use() is used to register middleware in an Express.js application."
    );

    addLog("");

    addLog("Example:");
    addLog("app.use((req, res, next) => {");
    addLog('    console.log("Request received");');
    addLog("    next();");
    addLog("});");

    addLog("");

    addLog("URL:");
    addLog("http://localhost:3000/");

    addLog("");

    addLog("Output:");
    addLog("Request received");
    addLog("Home Page");

    addLog("");

    addLog("Program completed.");
}