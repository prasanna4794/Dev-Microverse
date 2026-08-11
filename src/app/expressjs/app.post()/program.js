export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is app.post() in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "app.post() is used to handle POST requests in an Express.js application."
    );

    addLog("");

    addLog("Example:");

    addLog("app.post('/users', (req, res) => {");
    addLog("    const user = req.body;");
    addLog("");
    addLog("    res.json({");
    addLog('        message: "User created",');
    addLog("        user: user");
    addLog("    });");
    addLog("});");

    addLog("");

    addLog("Request:");
    addLog("POST /users");

    addLog("");

    addLog("Request Body:");
    addLog('{ "name": "Prasanna", "age": 25 }');

    addLog("");

    addLog("Output:");
    addLog("User created");

    addLog("");

    addLog("Program completed.");
}