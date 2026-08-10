export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What are req and res in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog("req represents the client request.");
    addLog("res represents the server response.");

    addLog("");

    addLog("Example:");
    addLog('app.get("/users/:id", (req, res) => {');
    addLog("    const id = req.params.id;");
    addLog('    res.send(`User ID: ${id}`);');
    addLog("});");

    addLog("");

    addLog("URL:");
    addLog("http://localhost:3000/users/101");

    addLog("");

    addLog("Output:");
    addLog("User ID: 101");

    addLog("");

    addLog("Program completed.");
}