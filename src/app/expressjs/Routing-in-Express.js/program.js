export default function runProgram(addLog) {

    addLog("Question:");
    addLog("What is Routing in Express.js?");
    addLog("");

    addLog("Answer:");
    addLog(
        "Routing defines how an application responds to different URLs and HTTP methods."
    );

    addLog("");

    addLog("Example:");
    addLog('app.get("/users", (req, res) => {');
    addLog('    res.send("Users List");');
    addLog("});");

    addLog("");

    addLog("URL:");
    addLog("http://localhost:3000/users");

    addLog("");

    addLog("Output:");
    addLog("Users List");

    addLog("");

    addLog("Program completed.");
}