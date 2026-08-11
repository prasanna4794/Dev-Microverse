export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is app.get() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "app.get() is used to handle GET requests in an Express.js application."
    );

    addLog("");

    addLog("Example:");

    addLog("app.get('/users', (req, res) => {");
    addLog('    res.send("Users List");');
    addLog("});");

    addLog("");

    addLog("URL:");
    addLog("http://localhost:3000/users");

    addLog("");

    addLog("Request:");
    addLog("GET /users");

    addLog("");

    addLog("Output:");
    addLog("Users List");

    addLog("");

    addLog("Program completed.");
}