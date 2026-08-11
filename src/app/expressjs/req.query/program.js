export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is req.query in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "req.query is used to access query parameters from the URL."
    );

    addLog("");

    addLog("Example:");
    addLog('app.get("/users", (req, res) => {');
    addLog("    const name = req.query.name;");
    addLog("    res.send(`User Name: ${name}`);");
    addLog("});");

    addLog("");

    addLog("URL:");
    addLog("http://localhost:3000/users?name=Prasanna");

    addLog("");

    addLog("Output:");
    addLog("User Name: Prasanna");

    addLog("");

    addLog("Program completed.");
}